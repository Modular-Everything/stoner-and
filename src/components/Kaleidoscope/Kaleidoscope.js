import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

//

export const Kaleidoscope = (props) => {
  const canvasRef = useRef(null);

  const { image } = props;

  useEffect(() => {
    if (!image) return null;

    // ** Configure canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // ** Kaleidoscope Settings
    const vw = window.innerWidth / 3.5;
    const vh = window.innerHeight / 3.5;
    const ease = 0.005;
    const settings = {
      offsetRotation: 0,
      offsetScale: 0.8,
      offsetX: 0,
      offsetY: 0,
      radius: vw,
      slices: 12,
      zoom: 1.5,
    };
    canvas.width = settings.radius * 2;
    canvas.height = settings.radius * 2;

    // ** Create the image
    const img = new Image();
    let fill;
    img.src = image;
    img.onload = () => {
      fill = context.createPattern(img, 'repeat');
    };

    // ** Set kaleidoscope scale
    const scale =
      settings.zoom * (settings.radius / Math.min(img.width, img.height));
    const step = (Math.PI * 2) / settings.slices;
    const contextWidth = img.width / 2;

    // ** Draw it
    function draw() {
      context.fillStyle = fill;

      for (let index = 0; index <= settings.slices; index += 1) {
        context.save();
        context.translate(settings.radius, settings.radius);
        context.rotate(index * step);
        context.beginPath();
        context.moveTo(-0.5, -0.5);
        context.arc(0, 0, settings.radius * 2, step * -0.55, step * 0.55);
        context.rotate(Math.PI / 2);
        context.scale(scale / 2, scale / 2);
        context.scale([-1, 1][index % 2], 1);
        context.translate(settings.offsetX - contextWidth, settings.offsetY);
        context.rotate(settings.offsetRotation);
        context.scale(settings.offsetScale, settings.offsetScale);
        context.fill();
        context.restore();
      }
    }

    let tx = settings.offsetX;
    let ty = settings.offsetY;
    let tr = settings.offsetRotation;
    let dx;
    let dy;
    let hx;
    let hy;

    // ** Track mouse movement
    window.addEventListener(
      'mousemove',
      (e) => {
        dx = e.pageX / vw;
        dy = e.pageY / vh;
        hx = dx - 0.1;
        hy = dy - 0.1;
        tx = hx * settings.radius * -0.8;
        ty = hy * settings.radius * 0.8;
      },
      false
    );

    canvas.style.position = 'fixed';

    // ** Animate the canvas
    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.restore();

      tr -= 0.002;

      settings.offsetX += (tx - settings.offsetX) * ease;
      settings.offsetY += (ty - settings.offsetY) * ease;
      settings.offsetRotation += (tr - settings.offsetRotation) * ease;

      draw();
      requestAnimationFrame(update);
    }

    update();
  }, [image]);

  return (
    <canvas
      ref={canvasRef}
      {...props}
      style={{ zIndex: 0, position: 'relative' }}
    />
  );
};

Kaleidoscope.propTypes = {
  image: PropTypes.string.isRequired,
};

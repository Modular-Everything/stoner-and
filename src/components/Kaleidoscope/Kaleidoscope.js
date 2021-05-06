import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import limitNumberWithinRange from '../../helpers/limitNumberWithinRange';

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
        tx = limitNumberWithinRange(hx * settings.radius * -0.8, -150, 150);
        ty = limitNumberWithinRange(hy * settings.radius * 0.8, -150, 150);
      },
      false
    );

    canvas.style.position = 'absolute';
    context.clearRect(0, 0, canvas.width, canvas.height);

    // ** Animate the canvas

    const FRAMES_PER_SECOND = 10; // Valid values are 60,30,20,15,10...
    // set the mim time to render the next frame
    const FRAME_MIN_TIME =
      (1000 / 60) * (60 / FRAMES_PER_SECOND) - (1000 / 60) * 0.5;
    let lastFrameTime = 0; // the last frame time

    function update(time) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.restore();

      tr -= 0.002;

      settings.offsetX += (tx - settings.offsetX) * ease;
      settings.offsetY += (ty - settings.offsetY) * ease;
      settings.offsetRotation += (tr - settings.offsetRotation) * ease;

      if (time - lastFrameTime < FRAME_MIN_TIME) {
        // skip the frame if the call is too early
        draw();
        requestAnimationFrame(update);
        return; // return as there is nothing to do
      }

      lastFrameTime = time;

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

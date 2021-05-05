import { useCallback, useEffect, useRef, useState } from 'react';

const useWindowWidth = () => {
  const ssr = typeof window === 'undefined';
  const [width, setWidth] = useState(ssr ? 0 : window.innerWidth);

  const mounted = useRef(true);

  const handleResize = useCallback(() => {
    if (mounted.current) {
      setWidth(window.innerWidth);
    }
  }, [setWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(handleResize);
    });
    return () => {
      mounted.current = false;
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return width;
};

export default useWindowWidth;

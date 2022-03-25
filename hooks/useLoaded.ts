import { useState, useEffect } from "react";

export const useLoaded = (src: string): boolean | string => {
  const [loaded, setLoaded] = useState(src as string | boolean);

  useEffect(() => {
    if (!src) {
      return;
    }

    const image = new Image();
    let active = true;
    setLoaded(false);

    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };

    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };

    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);
  return loaded;
};

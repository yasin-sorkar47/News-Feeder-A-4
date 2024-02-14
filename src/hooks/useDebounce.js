import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutRef = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, []);

  const debounceCallback = (...args) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debounceCallback;
};

export default useDebounce;

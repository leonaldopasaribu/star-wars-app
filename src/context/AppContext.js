import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getFilms } from "../redux/store/actions/filmActions";
import { getPeoples } from "../redux/store/actions/peopleAction";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isMedium, setIsMedium] = useState(false);

  const getWindowDimensions = () => {
    const { innerWidth: width } = typeof window !== "undefined" ? window : 0;
    return {
      width,
    };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({});

    useEffect(() => {
      setWindowDimensions(getWindowDimensions());

      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowDimensions;
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  useEffect(() => {
    dispatch(getPeoples());
  }, []);

  useEffect(() => {
    if (width < 1366) {
      setIsMedium(true);
    } else {
      setIsMedium(false);
    }
  }, [width]);

  return (
    <AppContext.Provider
      value={{
        useWindowDimensions,
        isMedium,
        setIsMedium,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

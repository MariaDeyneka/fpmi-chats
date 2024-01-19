import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTheme } from "@mui/material/styles";

const MainColorContext = createContext();

export const MainColorProvider = ({ children }) => {
  const theme = useTheme();
  const [mainColor, setMainColor] = useState(
    Cookies.get("mainColor") || theme.palette.success.main
  );

  const [mode, setMode] = useState(Cookies.get("themeMode") || "light");

  useEffect(() => {
    Cookies.set("mainColor", mainColor, { expires: 365 });

    Cookies.set("themeMode", mode, { expires: 365 });
  }, [mainColor, mode]);

  return (
    <MainColorContext.Provider
      value={{ mainColor, setMainColor, mode, setMode }}
    >
      {children}
    </MainColorContext.Provider>
  );
};

export const useMainColor = () => {
  return useContext(MainColorContext);
};

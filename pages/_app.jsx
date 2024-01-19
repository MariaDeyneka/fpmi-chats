import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import "./../styles/globals.scss";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ThemePicker from "./components/theme/ThemePicker";
import { createTheme } from "@mui/material/styles";
import { MainColorProvider } from "./shared/MainColorContext";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function RootLayout(props) {
  const router = useRouter();
  const colors = {
    primary: {
      main: "#42a5f5",
      dark: "#1976D2",
    },
    secondary: {
      main: "#ab47bc",
      dark: "#8E24AA",
    },
    success: {
      main: "#388e3c",
      dark: "#1B5E20",
    },
    error: {
      main: "#d32f2f",
      dark: "#C62828",
    },
    warning: {
      main: "#f57c00",
      dark: "#E65100",
    },
    info: {
      main: "#3f51b5",
    },
  };

  const [mode, setMode] = useState(Cookies.get("themeMode") || "light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...colors,
        },
      }),
    [colors, mode]
  );

  const { Component, pageProps } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const loggedIn = Cookies.get("loggedIn");
    if (!loggedIn && router.pathname === "/") {
      router.push("/login");
    }
  }, [router, router.pathname]);

  return (
    <h1>
      {isClient ? (
        <html lang="en">
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>FPMI Chats</title>
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainColorProvider>
              <Component {...pageProps} />
              <ThemePicker ChangeTheme={setMode} />
            </MainColorProvider>
          </ThemeProvider>
        </html>
      ) : (
        "Prerendered"
      )}
    </h1>
  );
}

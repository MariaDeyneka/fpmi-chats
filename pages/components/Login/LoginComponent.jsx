import React, {useState} from "react";
import styles from "./LoginComponent.module.scss";
import {
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useMainColor } from "../../shared/MainColorContext";
import Cookies from "js-cookie";

const LoginComponent = () => {
  const { mainColor } = useMainColor();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    Cookies.set("loggedIn", "true");
    setLoggedIn(true);
    window.location.replace("/");
  };

  return (
    <Paper elevation={2} square={false} className={styles.styledWrapper}>
      <Typography variant="h3" sx={{ alignSelf: "center" }}>
        Login
      </Typography>
      <Stack spacing={8}>
        <Box className={styles.stackWrapper}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 275,
              opacity: 0.6,
            }}
          >
            Username
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ borderRadius: "14px" }}
          />
        </Box>
        <Box className={styles.stackWrapper}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 275,
              opacity: 0.6,
            }}
          >
            Password
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ borderRadius: "14px" }}
          />
        </Box>
      </Stack>
      <Button
        variant="contained"
        sx={{
          width: "30%",
          alignSelf: "end",
          borderRadius: "18px",
          backgroundColor: mainColor,
        }}
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </Button>
    </Paper>
  );
};

export default LoginComponent;

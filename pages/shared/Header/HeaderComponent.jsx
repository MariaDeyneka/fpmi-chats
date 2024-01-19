import React from "react";
// import styles from "./HeaderComponent.module.scss";
import { Typography, Avatar, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMainColor } from "../MainColorContext";

const HeaderComponent = () => {
  const { mainColor } = useMainColor();
  const theme = useTheme();
  return (
    <Container
      sx={{
        p: "20px 15%!important",
        m: 0,
        background: theme.palette.mode === "dark" ? "#0d0d0d" : "#EDEDED",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      maxWidth="100%"
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="h6" sx={{ color: mainColor, fontWeight: 900 }}>
          FPMI
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 900 }}>
          chat support
        </Typography>
      </Box>
      <Avatar sx={{ bgcolor: mainColor }}>MD</Avatar>
    </Container>
  );
};

export default HeaderComponent;

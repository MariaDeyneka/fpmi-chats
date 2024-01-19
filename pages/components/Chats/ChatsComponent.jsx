import React from "react";
import styles from "./ChatsComponent.module.scss";
import {
  Paper,
  Button,
  Box,
  Avatar,
  Typography,
  TextField,
} from "@mui/material";
import dynamic from "next/dynamic";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useTheme } from "@mui/material/styles";
import { useMainColor } from "../../shared/MainColorContext";

const Header = dynamic(() => import("./../../shared/Header/HeaderComponent"));

const ChatsComponent = () => {
  const { mainColor } = useMainColor();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Header></Header>
      <Paper
        elevation={2}
        sx={{ maxWidth: "68%!important", m: "40px 0 0 16%", p: "20px" }}
      >
        <Box className={styles.displayContainer}>
          <Button
            variant="text"
            sx={{ color: mainColor }}
            onClick={() => window.location.replace("/")}
          >{`<< Back`}</Button>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            Maria Deyneka
          </Typography>
          <Avatar sx={{ bgcolor: mainColor }}>MD</Avatar>
        </Box>
        <Paper
          variant="outlined"
          sx={{ height: "500px" }}
          className={styles.chatContainer}
        >
          <Box sx={{ p: "40px 20px" }}>
            <Box className={styles.textContainer} sx={{ bgcolor: mainColor }}>
              <Typography variant="p">
                Мені щось підказує що з дизайном fpmi цей сайт виглядає трохи
                гавняно. Ну короче, я додам можливість темного варіанту і таку ж
                тематику, подивимось чи в очі бити не буде.
              </Typography>
              <Typography variant="p" sx={{ opacity: 0.5 }} className={styles.timeContainer}>
                13:45
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: theme.palette.mode === "dark" ? "#0d0d0d" : "#EDEDED",
            }}
            className={styles.replyContainer}
          >
            <AttachFileIcon fontSize="large" style={{ color: "grey" }} />
            <TextField
              id="outlined-basic"
              label="Message..."
              variant="outlined"
              sx={{ width: "80%" }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: mainColor,
                borderRadius: "18px",
                mr: 2,
                width: 100,
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Paper>
    </React.Fragment>
  );
};

export default ChatsComponent;

import React, { useState } from "react";
import styles from "./MainComponent.module.scss";
import {
  Paper,
  TextField,
  Button,
  Box,
  Container,
  List,
  ListItem,
  ButtonGroup,
  Avatar,
  Typography,
  InputAdornment,
} from "@mui/material";
import dynamic from "next/dynamic";
import SearchIcon from "@mui/icons-material/Search";
import { useMainColor } from "../../shared/MainColorContext";

const Header = dynamic(() => import("../../shared/Header/HeaderComponent"));

const MainComponent = () => {
  const { mainColor } = useMainColor();
  const navigate = () => {
    window.location.replace("/chat");
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Container sx={{ maxWidth: "73%!important", mt: 5 }}>
        <Box className={styles.filterContainer}>
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            maxWidth={500}
            sx={{ width: 500 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ borderColor: mainColor }}
          >
            <Button
              sx={{
                background: `${mainColor}`,
                borderColor: "#EDEDED!important",
              }}
            >
              Latest
            </Button>
            <Button sx={{ background: `${mainColor}` }}>Oldest</Button>
          </ButtonGroup>
        </Box>
        <Paper variant="outlined" maxWidth="100%">
          <List sx={{ p: 0 }}>
            <ListItem
              sx={{ p: "16.5px 14px", border: `1px solid ${mainColor}` }}
              className={styles.listItem}
            >
              <Avatar sx={{ bgcolor: mainColor, marginRight: "10px" }}>
                MD
              </Avatar>
              <Box sx={{ width: "82%" }}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
                  <Typography variant="h6">Maria Deyneka</Typography>
                  <Typography variant="p" sx={{mr: "3%"}}>Sep 12</Typography>
                </Box>

                <Typography variant="p" sx={{ opacity: 0.5 }}>
                  Мені щось підказує що з дизайном fpmi цей сайт виглядає трохи
                  гавняно. Ну короче, я додам можливість темного варіанту і
                  так...
                </Typography>
              </Box>
              <hr className={styles.divider}></hr>
              <Button
                variant="contained"
                sx={{
                  bgcolor: mainColor,
                  borderRadius: "18px",
                }}
                onClick={() => {
                  navigate();
                }}
              >
                Open chat
              </Button>
            </ListItem>
            <ListItem
              sx={{
                p: "16.5px 14px",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                mt: 2,
              }}
              className={styles.listItem}
            >
              <Avatar sx={{ bgcolor: mainColor, marginRight: "10px" }}>
                LI
              </Avatar>
              <Box sx={{ width: "82%" }}>
                <Typography variant="h6">Lorem Ipsum</Typography>
                <Typography variant="p" sx={{ opacity: 0.5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sollicitudin lectus felis, ut auctor sem semper id.
                  Suspendisse non dol...
                </Typography>
              </Box>
              <hr className={styles.divider}></hr>
              <Button
                variant="contained"
                sx={{
                  bgcolor: mainColor,
                  borderRadius: "18px",
                }}
              >
                Open chat
              </Button>
            </ListItem>
          </List>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default MainComponent;

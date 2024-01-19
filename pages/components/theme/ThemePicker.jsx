import React from "react";
import {
  Paper,
  Typography,
  Button,
  Box,
  Modal,
  Fab,
  Divider,
  Grid,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useTheme } from "@mui/material/styles";
import { useMainColor } from "../../shared/MainColorContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ThemePicker = ({ ChangeTheme }) => {
  const { mainColor, setMainColor, mode, setMode } = useMainColor();
  const theme = useTheme();
  const colors = [
    {
      id: 1,
      color: theme.palette.success.dark,
    },
    {
      id: 2,
      color: theme.palette.primary.dark,
    },
    {
      id: 3,
      color: theme.palette.secondary.dark,
    },
    {
      id: 4,
      color: theme.palette.error.dark,
    },
    {
      id: 5,
      color: theme.palette.warning.dark,
    },
    {
      id: 6,
      color: theme.palette.info.main,
    },
  ];

  const handleModeChange = (newMode) => {
    setMode(newMode);
    ChangeTheme(newMode);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Fab sx={{ bgcolor: mainColor, position: 'absolute', right: 50, bottom: 50 }} aria-label="add" onClick={handleOpen}>
        <TuneIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Settings
          </Typography>
          <Divider />
          <Typography variant="p" sx={{ opacity: 0.5, mt: "5px" }}>
            Mode
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {" "}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  background: theme.palette.mode !== "dark" && "#EDEDED",
                }}
              >
                <Button onClick={() => handleModeChange("light")}>
                  {" "}
                  <WbSunnyIcon />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  background: theme.palette.mode === "dark" && "transparent",
                }}
              >
                <Button onClick={() => handleModeChange("dark")}>
                  {" "}
                  <NightsStayIcon />
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="p" sx={{ opacity: 0.5 }}>
            Palette
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {colors.map((el, index) => (
              <Grid item xs={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                  }}
                >
                  <Button
                    sx={{
                      width: "30px",
                      height: "30px",
                      background: el.color,
                      borderRadius: "50%",
                      minWidth: "30px",
                    }}
                    onClick={() => setMainColor(el.color)}
                  ></Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ThemePicker;

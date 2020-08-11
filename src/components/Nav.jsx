import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2c9c92",
      main: "#22878c",
      dark: "#035b5e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#485157",
      main: "#444d52",
      dark: "#363c40",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const navBar = {
    color: "white",
    float: "right",
    textDecoration: "underline",
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Brian Cook
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/bw-react-portfolio">
                <Button style={navBar}>About</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Portfolio">
                <Button style={navBar}>Portfolio</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Contact">
                <Button style={navBar}>Contact</Button>
              </Link>
            </Typography>
            <div>
              <a
                href="https://github.com/Bcook131"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={navBar}>
                  <GitHubIcon fontSize="large" />
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/brian-cook-90b0b91ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={navBar}>
                  <LinkedInIcon fontSize="large" />
                </Button>
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
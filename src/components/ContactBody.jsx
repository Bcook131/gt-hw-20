import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box m={2} width={750} mx="auto">
        <Card className={classes.root}>
          <CardActionArea>
            <Avatar
              alt="Brad Williams"
              src="https://i.imgur.com/Atodq5v.png"
              className={classes.large}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Brian Nicholas Cook
              </Typography>
              <Typography variant="body2" component="p">
                Thank you for viewing my contact page. Feel free to message me via any of these choices. Thanks!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              <a
                href="https://docs.google.com/document/d/1RcjhjXo1_0ogXtvjdYHrZ7U78nBEPwMM7ilpicaMSUg/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Resume
              </a>
            </Button>
            <Button size="large" color="primary">
              <a href="mailto: bcrazorrider@gmail.com">Email</a>
            </Button>
            <Button size="large" color="primary">
              <a href="tel:+16783577144"> 678-357-7144</a>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
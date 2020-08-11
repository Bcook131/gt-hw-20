import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  const bioStyle = {
    float: "left",
    marginRight: "20px",
    width: "250px",
    height: "auto",
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#37474f", marginTop: "20px" }}
      >
        <img
          style={bioStyle}
          src="https://i.imgur.com/Atodq5v.png"
          alt="Brian Cook"
        />
        <Typography
          variant="subtitle1"
          component="subtitle1"
          style={{ color: "white" }}
        >
          My name is Brian Nicholas Cook. I grew up in McDonough, GA. I went to high school at Union Grove
                        High School and then went to college at The Universoty of Central Arkansas. I played baseball
                        and basketball almost all of my life. Some of my hobbies include but aren't limited to xbox,
                        basketball, baseball, ultimate frisbee, and PC.
        </Typography>
      </Container>
    </React.Fragment>
  );
}
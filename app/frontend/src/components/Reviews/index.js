import { Card, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ReviewCard from "./ReviewCard";
import { blueGrey, indigo, orange, red, blue, yellow, green, grey } from "@material-ui/core/colors";

const getColor = () => {
  let seed = Math.random();
  
  switch (true) {
    case seed < 0.1:
      return red[500];
    case seed < 0.2:
      return orange[500];
    case seed < 0.3:
      return yellow[500];
    case seed < 0.4:
      return green[500];
    case seed < 0.5:
      return blue[500];
    case seed < 0.6:
      return indigo[500];
    case seed < 0.7:
      return blueGrey[500];
    case seed < 0.8:
      return grey[500];
  }
}

const index = () => {

  //TODO: Get from API
  let reviews = [
    {
      initial: "R",
      tuitionType: "English",
      date: "13 March 2021",
      description: "Kind and funny.",
      rating: 5.0,
    },
    {
      initial: "B",
      tuitionType: "Math",
      date: "13 May 2021",
      description: "Kind and funny.",
      rating: 4.5,
    },
    {
      initial: "B",
      tuitionType: "Math",
      date: "13 May 2021",
      description: "Kind and funny.",
      rating: 4.5,
    },
    {
      initial: "B",
      tuitionType: "Math",
      date: "13 May 2021",
      description: "Kind and funny.",
      rating: 4.5,
    },
    {
      initial: "B",
      tuitionType: "Math",
      date: "13 May 2021",
      description: "Kind and funny.",
      rating: 4.5,
    },
    {
      initial: "B",
      tuitionType: "Math",
      date: "13 May 2021",
      description: "Kind and funny.",
      rating: 4.5,
    },
  ];

  return (
    <Grid container spacing={3} direction="column">
      {reviews.map((review, id) => {
        let colour = getColor();
        return (
          <Grid item key={id}>
            <ReviewCard data={review} colour={colour}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default index;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import NoSsr from '@material-ui/core/NoSsr';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import "./Button.css";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Rating } from "@material-ui/lab";
import { useNavigate, Link } from "react-router-dom";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  name: {
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#fff",
    // textTransform: 'uppercase',
  },
  bio: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "0.5rem",
    fontWeight: 500,
    fontSize: 14,
  },
  subject: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "0.5rem",
    fontWeight: 500,
    fontSize: 14,
  },
  price: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 1,
    marginTop: "0.5rem",
    fontWeight: 1000,
    fontSize: 14,
  },
  qualification: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "0.5rem",
    fontWeight: 500,
    fontSize: 14,
  },
  location: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "0.5rem",
    fontWeight: 500,
    fontSize: 14,
  },
  levels: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "0.5rem",
    fontWeight: 500,
    fontSize: 14,
  },
  paginationStyle: {
    "& > *": {
      marginTop: theme.spacing(5),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export const CustomCard = ({
  classes,
  image,
  name,
  bio,
  levels,
  price,
  location,
  qualification,
  gender,
  rating,
  reviews,
  userid,
}) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  let limit = 30;
  let bioFormatted =
    bio.length > limit ? bio.substring(0, limit - 3) + "..." : bio;
  const element = (
    <div>
      <h3>${price}/hr</h3>
      <h5>
        {rating ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Rating
              name="half-rating-read"
              value={rating}
              readOnly
              precision={0.1}
            />
            <span>({reviews})</span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Rating name="half-rating-read" value={0} readOnly max={1} />
            <span style={{ fontSize: "small" }}>No reviews yet</span>
          </div>
        )}
      </h5>
      <p style={{ marginBottom: 0 }}>
        <b>Gender: </b>
        {gender}
      </p>
      <p style={{ marginBottom: 0 }}>
        <b>Highest qualification: </b>
        {qualification}
      </p>
      <p style={{ marginBottom: 0 }}>
        <b>Teaches: </b>
        {levels.join(", ")}
      </p>
      <p style={{ marginBottom: 0 }}>{bioFormatted}</p>
    </div>
  );

  const redirect = (userid) => {
    useNavigate(`/tutor/`);
  }
  return (
    <Link to={`/tutor/${userid}`} style={{ textDecoration: 'none' }}>

    <CardActionArea
      className={classes.actionArea}
      // onClick={() => redirect()}
      // href={`/tutor/`}
      // component={Link} to="/questions"
    >
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent>
          <TextInfoContent
            classes={textCardContentStyles}
            overline={location}
            heading={name}
            body={element}
          />
        </CardContent>
      </Card>
    </CardActionArea>
    </Link>
  );
};

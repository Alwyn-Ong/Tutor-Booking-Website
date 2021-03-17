import React from "react";
import Color from "color";
// import GoogleFont from 'react-google-font-loader';
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
}));

const CustomCard = ({
  classes,
  image,
  name,
  bio,
  levels,
  price,
  location,
  qualification,
  gender,
}) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const element = (
    <div>
      <h3>${price}/hr</h3>
      <p>
        <b>Gender: </b>
        {gender}
      </p>
      <p>
        <b>Highest qualification: </b>
        {qualification}
      </p>
      <p>
        <b>Teaches: </b>
        {levels}
      </p>
      <p>{bio}</p>
    </div>
  );
  return (
    <CardActionArea className={classes.actionArea}>
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
  );
};

let tutorResults = [
  {
    name: "1Tan Ah Seng",
    description: "Drunkard",
    price: "40",
    gender: "Male",
    qualification: "Degree",
    nearestMrt: "Eunos",
    userid: 3,
    levelsTaught: {
      Primary: ["Math", "Chinese", "English"],
      Secondary: ["Math", "Chinese", "English"],
      JC: ["English"],
    },
  },
  {
    name: "2Tan Ah Beng",
    description: "Lulser",
    price: "70",
    Level: "JC",
    gender: "Male",
    qualification: "O-level",
    nearestMrt: "Dhoby Ghaut",
    userid: 1,
  },
  {
    name: "3Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "4Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "5Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
  {
    name: "6Tan Ah Seng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Male",
    qualification: "Degree",
    nearestMrt: "Eunos",
    userid: 3,
  },
  {
    name: "7Tan Ah Beng",
    description: "Lulser",
    price: "70",
    Level: "JC",
    gender: "Male",
    qualification: "O-level",
    nearestMrt: "Dhoby Ghaut",
    userid: 1,
  },
  {
    name: "8Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "9Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "10Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
  {
    name: "11Tan Ah Seng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Male",
    qualification: "Degree",
    nearestMrt: "Eunos",
    userid: 3,
  },
  {
    name: "12Tan Ah Beng",
    description: "Lulser",
    price: "70",
    Level: "JC",
    gender: "Male",
    qualification: "O-level",
    nearestMrt: "Dhoby Ghaut",
    userid: 1,
  },
  {
    name: "13Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "14Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "15Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
  {
    name: "16Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "17Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "18Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
  {
    name: "19Tan Ah Seng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Male",
    qualification: "Degree",
    nearestMrt: "Eunos",
    userid: 3,
  },
  {
    name: "20Tan Ah Beng",
    description: "Lulser",
    price: "70",
    Level: "JC",
    gender: "Male",
    qualification: "O-level",
    nearestMrt: "Dhoby Ghaut",
    userid: 1,
  },
  {
    name: "21Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "22Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "23Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
  {
    name: "24Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "25Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "26Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
  {
    name: "27Tan Ah Seng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Male",
    qualification: "Degree",
    nearestMrt: "Eunos",
    userid: 3,
  },
  {
    name: "28Tan Ah Beng",
    description: "Lulser",
    price: "20",
    Level: "JC",
    gender: "Male",
    qualification: "O-level",
    nearestMrt: "Dhoby Ghaut",
    userid: 1,
  },
  {
    name: "29Tan Ah Feng",
    description: "Drunkard",
    price: "40",
    Level: "Primary School",
    gender: "Female",
    qualification: "Degree",
    nearestMrt: "Jurong",
    userid: 4,
  },
  {
    name: "30Ah Leng",
    description: "Good lessons efficinet fast",
    price: "60",
    Level: "Primary School",
    gender: "Male",
    qualification: "A-level",
    nearestMrt: "Dakota",
    userid: 5,
  },
  {
    name: "31Ah Peng",
    description: "Football",
    price: "50",
    Level: "Sec School",
    gender: "Female",
    qualification: "Masters",
    nearestMrt: "Downtown Line",
    userid: 2,
  },
];

export const Results = React.memo(function SolidGameCard({ filterConditions }) {
  const gridStyles = useGridStyles();
  const classes = useStyles();

  const styles = useStyles({ color: "#203f52" });
  const items = [];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [res, setRes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // let res;
  const handleChange = (event, value) => {
    setCurrentPage(value);
    // [array of filters]
    //let filteredResults = tutorResults.filter()
    //setPosts(filteredResults.slice())
    // let temp = res.slice((value - 1) * 8, (value - 1) * 8 + 8);
    // setPosts(temp);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res = tutorResults.filter((item) => {
        const checkLocation = (conditions, location) => {
          if (conditions.length == 0) {
            return true;
          }

          for (condition of conditions) {
            if (location === condition.value) {
              return true;
            }
          }
          return false;
        };

        for (var key in filterConditions) {
          if (filterConditions[key] === "") {
            continue;
          } else if (key === "selectedLocations") {
            if (!checkLocation(filterConditions[key], item.nearestMrt)) {
              return false;
            }
          } else if (key === "price") {
            switch (filterConditions[key]) {
              case "$":
                if (item.price > 30) {
                  return false;
                }
                break;
              case "$$":
                if (item.price < 30 || item.price > 50) {
                  return false;
                }
                break;
              case "$$$":
                if (item.price < 50) {
                  return false;
                }
                break;
              default:
                break;
            }
          } else if (
            item[key] === undefined ||
            item[key] === "" ||
            item[key] != filterConditions[key]
          ) {
            return false;
          }
        }
        return true;

        // return (item.gender === 'Male');
      });
      // setRes(filteredRes);
      // console.log(`Before filter: ${filteredTutorResults.length}`);
      // console.log(filteredRes);
      //replace res with api
      // let temp = res.slice(0, 8);
      // let temp = res.slice((value - 1) * 8, (value - 1) * 8 + 8);
      let temp = res.slice((currentPage - 1) * 8, (currentPage - 1) * 8 + 8);

      // console.log(res);

      setPosts(temp);
      setTotalPages(Math.ceil(res.length / 8));
      setLoading(false);
    };
    fetchPosts();
  }, [filterConditions, currentPage]);

  for (const [index, value] of posts.entries()) {
    items.push(
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CustomCard
          key={value.userid}
          // onClick={value.userid}
          classes={styles}
          name={value.name}
          bio={value.description}
          price={value.price}
          levels={value.Level}
          qualification={value.qualification}
          location={value.nearestMrt}
          image={"./guy1.jpg"}
          gender={value.gender}
        />
      </Grid>
    );
  }

  return (
    <div>
      <Grid classes={gridStyles} container spacing={4}>
        {items}
      </Grid>
      <Grid container justify="center">
        <div className={classes.paginationStyle}>
          <Pagination count={totalPages} size="large" onChange={handleChange} />
        </div>
      </Grid>
    </div>
  );
});
export default Results;

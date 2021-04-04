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
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Rating } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import { CustomCard } from "./CustomCard";
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

// const CustomCard = ({
//   classes,
//   image,
//   name,
//   bio,
//   levels,
//   price,
//   location,
//   qualification,
//   gender,
//   rating,
//   reviews,
//   userid,
//   redirect
// }) => {
//   const mediaStyles = useFourThreeCardMediaStyles();
//   const textCardContentStyles = useN04TextInfoContentStyles();
//   const shadowStyles = useOverShadowStyles({ inactive: true });
//   let limit = 30;
//   let bioFormatted =
//     bio.length > limit ? bio.substring(0, limit - 3) + "..." : bio;
//   const element = (
//     <div>
//       <h3>${price}/hr</h3>
//       <h5>
//         {rating ? (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <Rating
//               name="half-rating-read"
//               value={rating}
//               readOnly
//               precision={0.1}
//             />
//             <span>({reviews})</span>
//           </div>
//         ) : (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <Rating name="half-rating-read" value={0} readOnly max={1} />
//             <span style={{ fontSize: "small" }}>No reviews yet</span>
//           </div>
//         )}
//       </h5>
//       <p style={{ marginBottom: 0 }}>
//         <b>Gender: </b>
//         {gender}
//       </p>
//       <p style={{ marginBottom: 0 }}>
//         <b>Highest qualification: </b>
//         {qualification}
//       </p>
//       <p style={{ marginBottom: 0 }}>
//         <b>Teaches: </b>
//         {levels.join(", ")}
//       </p>
//       <p style={{ marginBottom: 0 }}>{bioFormatted}</p>
//     </div>
//   );
//   return (
//     <CardActionArea
//       className={classes.actionArea}
//       onClick={() => useNavigate(`/tutor/`)}
//     >
//       <Card className={classes.card}>
//         <CardMedia classes={mediaStyles} image={image} />
//         <CardContent>
//           <TextInfoContent
//             classes={textCardContentStyles}
//             overline={location}
//             heading={name}
//             body={element}
//           />
//         </CardContent>
//       </Card>
//     </CardActionArea>
//   );
// };

// let tutorResults = [
//   {
//     name: "1Tan Ah Seng",
//     description: "Drunkard",
//     price: "40",
//     gender: "Male",
//     qualification: "Degree",
//     nearestMrt: "Eunos",
//     userid: 3,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: [],
//     },
//   },
//   {
//     name: "2Tan Ah Beng",
//     description: "Lulser",
//     price: "70",
//     Level: "JC",
//     gender: "Male",
//     qualification: "O-Levels",
//     nearestMrt: "Dhoby Ghaut",
//     userid: 1,
//     levelsTaught: {
//       Primary: [],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "3Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: [],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "4Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "5Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "6Tan Ah Seng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "Degree",
//     nearestMrt: "Eunos",
//     userid: 3,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "7Tan Ah Beng",
//     description: "Lulser",
//     price: "70",
//     Level: "JC",
//     gender: "Male",
//     qualification: "O-Levels",
//     nearestMrt: "Dhoby Ghaut",
//     userid: 1,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "8Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "9Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "10Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "11Tan Ah Seng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "Degree",
//     nearestMrt: "Eunos",
//     userid: 3,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "12Tan Ah Beng",
//     description: "Lulser",
//     price: "70",
//     Level: "JC",
//     gender: "Male",
//     qualification: "O-Levels",
//     nearestMrt: "Dhoby Ghaut",
//     userid: 1,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "13Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "14Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "15Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: [],
//     },
//   },
//   {
//     name: "16Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "17Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "18Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "19Tan Ah Seng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "Degree",
//     nearestMrt: "Eunos",
//     userid: 3,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "20Tan Ah Beng",
//     description: "Lulser",
//     price: "70",
//     Level: "JC",
//     gender: "Male",
//     qualification: "O-Levels",
//     nearestMrt: "Dhoby Ghaut",
//     userid: 1,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "21Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "22Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "23Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "24Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "25Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "26Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "27Tan Ah Seng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "Diploma",
//     nearestMrt: "Eunos",
//     userid: 3,
//     levelsTaught: {
//       Primary: ["Math", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "28Tan Ah Beng",
//     description: "Lulser",
//     price: "20",
//     Level: "JC",
//     gender: "Male",
//     qualification: "O-Levels",
//     nearestMrt: "Dhoby Ghaut",
//     userid: 1,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "29Tan Ah Feng",
//     description: "Drunkard",
//     price: "40",
//     Level: "Primary School",
//     gender: "Female",
//     qualification: "Degree",
//     nearestMrt: "Jurong",
//     userid: 4,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "30Ah Leng",
//     description: "Good lessons efficinet fast",
//     price: "60",
//     Level: "Primary School",
//     gender: "Male",
//     qualification: "A-Levels",
//     nearestMrt: "Dakota",
//     userid: 5,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
//   {
//     name: "31Ah Peng",
//     description: "Football",
//     price: "50",
//     Level: "Sec School",
//     gender: "Female",
//     qualification: "Masters",
//     nearestMrt: "Downtown Line",
//     userid: 2,
//     levelsTaught: {
//       Primary: ["Math", "Chinese", "English"],
//       Secondary: ["Math", "Chinese", "English"],
//       JC: ["English"],
//     },
//   },
// ];

export const Results = React.memo(function SolidGameCard({
  filterConditions,
  search,
}) {
  const gridStyles = useGridStyles();
  const classes = useStyles();

  const styles = useStyles({ color: "#203f52" });
  const items = [];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // For Backdrop
  const [isLoading, setIsLoading] = useState(true);

  // From api
  const [tutorResults, setTutorResults] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  isLoading &&
    fetch("http://localhost:8080/api/getalltutors", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTutorResults(result);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      let res = tutorResults.filter((item) => {
        const checkLocation = (conditions, location) => {
          if (conditions.length == 0) {
            return true;
          }

          for (let condition of conditions) {
            if (location.toLowerCase() === condition.value.toLowerCase()) {
              return true;
            }
          }
          return false;
        };

        for (var key in filterConditions) {
          if (filterConditions[key] === "") {
            continue;
          } else if (key === "selectedLocations") {
            if (!checkLocation(filterConditions[key], item.nearestMRT)) {
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
          } else if (key === "level") {
            if (
              !(filterConditions[key] in item.levelsTaught) ||
              item.levelsTaught[filterConditions[key]].length == 0
            ) {
              return false;
            }
            // if (filterConditions[key])
          } else if (
            item[key] === undefined ||
            item[key] === "" ||
            item[key] != filterConditions[key]
          ) {
            return false;
          }
        }
        return true;
      });

      let searchList = search.split(" ");
      console.log(searchList)
      const noCheckList = ["userid", "rating", "reviews", "price"];
      for (var searchCondition of searchList) {
        res = res.filter((item) => {
          for (var key in item) {
            if (noCheckList.includes(key)) continue;
            if (key != "levelsTaught") {
              console.log(item[key])
              console.log(searchCondition)
              if (
                item[key] && searchCondition && item[key].toLowerCase().includes(searchCondition.toLowerCase())
              ) {
                return true;
              }
            } else {
              for (var level in key) {
                if (
                  key[level]
                    .toLowerCase()
                    .includes(searchCondition.toLowerCase())
                ) {
                  return true;
                }
              }
            }
          }
        });
      }

      // let temp = res.slice((currentPage - 1) * 8, (currentPage - 1) * 8 + 8);

      setPosts(res);
      setCurrentPage(1);
      // setTotalPages(Math.ceil(res.length / 8));
      setLoading(false);
    };
    fetchPosts();
  }, [tutorResults, filterConditions, search]);

  // FOr redirect to individual tutor page
  // const redirectToTutor = (userid) => {
  //   useNavigate(`/tutor/${userid}`);
  //   // window.href
  // };

  for (const [index, value] of posts
    .slice((currentPage - 1) * 8, (currentPage - 1) * 8 + 8)
    .entries()) {
    // Get unique levels
    let levels = [];
    if (value.levelsTaught !== undefined) {
      for (let key in value.levelsTaught) {
        if (value.levelsTaught[key].length != 0) levels.push(key);
      }
    }

    items.push(
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CustomCard
          key={value.userid}
          // onClick={value.userid}
          classes={styles}
          name={value.name}
          bio={value.description}
          price={value.price}
          // levels={value.Level}
          levels={levels}
          qualification={value.qualification}
          location={value.nearestMRT}
          // image={"./guy1.jpg"}
          // image="http://localhost:8080/api/files/1"
          image={value.imageURL}
          gender={value.gender}
          reviews={value.reviews}
          rating={value.rating}
          userid={value.userid}
        // redirect={redirectToTutor}
        // onClick={() => redirectToTutor(value.userid)}
        />
      </Grid>
    );
  }

  return (
    <div>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {!isLoading && (
        <>
          <Grid classes={gridStyles} container spacing={4}>
            {items}
          </Grid>
          <Grid container justify="center">
            <div className={classes.paginationStyle}>
              <Pagination
                // count={totalPages}
                count={Math.ceil(posts.length / 8)}
                size="large"
                onChange={handleChange}
              />
            </div>
          </Grid>
        </>
      )}
    </div>
  );
});
export default Results;

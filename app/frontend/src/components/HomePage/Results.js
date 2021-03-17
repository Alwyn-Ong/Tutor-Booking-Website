import React from 'react';
import Color from 'color';
// import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
// import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  name: {
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#fff',
    // textTransform: 'uppercase',
  },
  bio: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '0.5rem',
    fontWeight: 500,
    fontSize: 14,
  },
  subject: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '0.5rem',
    fontWeight: 500,
    fontSize: 14,
  },
  price: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 1,
    marginTop: '0.5rem',
    fontWeight: 1000,
    fontSize: 14,
  },
  qualification: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '0.5rem',
    fontWeight: 500,
    fontSize: 14,
  },
  location: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '0.5rem',
    fontWeight: 500,
    fontSize: 14,
  },
  levels: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '0.5rem',
    fontWeight: 500,
    fontSize: 14,
  },
  paginationStyle:{
    '& > *': {
      marginTop: theme.spacing(5),
    },
  }
}));

const CustomCard = ({ classes, image, name, bio, levels, price, location, qualification }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const element = (
    <div>
      <h3>${price}/hr</h3>
      <p><b>Highest Qualification: </b>{qualification}</p>
      <p><b>Teaches: </b>{levels}</p>
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


const tutorResults = [
    { Name: '1Tan Ah Seng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'Degree', Location: 'Eunos', userId: 3 },
    { Name: '2Tan Ah Beng', Bio: 'Lulser', Price: '70', 
    Level: 'JC', Gender: 'Male', Qualification: 'O-level', Location: 'Dhoby Ghaut', userId: 1 },
    { Name: '3Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '4Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '5Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
    { Name: '6Tan Ah Seng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'Degree', Location: 'Eunos', userId: 3 },
    { Name: '7Tan Ah Beng', Bio: 'Lulser', Price: '70', 
    Level: 'JC', Gender: 'Male', Qualification: 'O-level', Location: 'Dhoby Ghaut', userId: 1 },
    { Name: '8Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '9Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '10Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
    { Name: '11Tan Ah Seng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'Degree', Location: 'Eunos', userId: 3 },
    { Name: '12Tan Ah Beng', Bio: 'Lulser', Price: '70', 
    Level: 'JC', Gender: 'Male', Qualification: 'O-level', Location: 'Dhoby Ghaut', userId: 1 },
    { Name: '13Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '14Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '15Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
    { Name: '16Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '17Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '18Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
    { Name: '19Tan Ah Seng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'Degree', Location: 'Eunos', userId: 3 },
    { Name: '20Tan Ah Beng', Bio: 'Lulser', Price: '70', 
    Level: 'JC', Gender: 'Male', Qualification: 'O-level', Location: 'Dhoby Ghaut', userId: 1 },
    { Name: '21Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '22Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '23Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
    { Name: '24Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '25Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '26Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
    { Name: '27Tan Ah Seng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'Degree', Location: 'Eunos', userId: 3 },
    { Name: '28Tan Ah Beng', Bio: 'Lulser', Price: '70', 
    Level: 'JC', Gender: 'Male', Qualification: 'O-level', Location: 'Dhoby Ghaut', userId: 1 },
    { Name: '29Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: '30Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: '31Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
]

// const gridStyles = useGridStyles();
// const styles = useStyles({ color: '#203f52' });
// const styles2 = useStyles({ color: '#4d137f' });
// const styles3 = useStyles({ color: '#ff9900' });
// const styles4 = useStyles({ color: '#34241e' });



export const Results = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const classes = useStyles();

  const styles = useStyles({ color: '#203f52' });
  // const styles2 = useStyles({ color: '#4d137f' });
  // const styles3 = useStyles({ color: '#ff9900' });
  // const styles4 = useStyles({ color: '#34241e' });

  const items = []
  // const randomStyles = [styles,styles2,styles3,styles4];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    // [array of filters]
    //let filteredResults = tutorResults.filter()
    //setPosts(filteredResults.slice()) 
    let temp = tutorResults.slice((value-1)*8,(value-1)*8+8)
    setPosts(temp);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = tutorResults;
      //replace res with api
      let temp = tutorResults.slice(0,8);
      setPosts(temp);
      setTotalPages(Math.ceil(tutorResults.length/8));
      setLoading(false);
    };
    fetchPosts();
  }, []);

    for (const [index, value] of posts.entries()) {
        // items.push(<li key={index}>{value}</li>)s
        // let min = 1;
        // let max = 4;
        // let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(rand);
        // switch(rand){
        //     case 1:
                items.push(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CustomCard
                        key={value.userId}
                        // onClick={value.userId}
                        classes={styles}
                        name={value.Name}
                        bio={value.Bio}
                        price={value.Price}
                        levels={value.Level}
                        qualification={value.Qualification}
                        location={value.Location}
                        image={
                        './guy1.jpg'
                        }
                    />
                    </Grid>
                )
            //     break;
            // case 2:
            //     items.push(
            //       <Grid item xs={12} sm={6} md={4} lg={3}>
            //         <CustomCard
            //             key={value.userId}
            //             // onClick={value.userId}
            //             classes={styles2}
            //             name={value.Name}
            //             bio={value.Bio}
            //             price={value.Price}
            //             levels={value.Level}
            //             qualification={value.Qualification}
            //             location={value.Location}
            //             image={
            //             './guy1.jpg'
            //             }
            //         />
            //         </Grid>
            //     )
            //     break;
            // case 3:
            //     items.push(
            //       <Grid item xs={12} sm={6} md={4} lg={3}>
            //         <CustomCard
            //             key={value.userId}
            //             // onClick={value.userId}
            //             classes={styles3}
            //             name={value.Name}
            //             bio={value.Bio}
            //             price={value.Price}
            //             levels={value.Level}
            //             qualification={value.Qualification}
            //             location={value.Location}
            //             image={
            //             './guy1.jpg'
            //             }
            //         />
            //         </Grid>
            //     )
            //     break;
            // case 4:
            //     items.push(
            //       <Grid item xs={12} sm={6} md={4} lg={3}>
            //         <CustomCard
            //             key={value.userId}
            //             // onClick={value.userId}
            //             classes={styles4}
            //             name={value.Name}
            //             bio={value.Bio}
            //             price={value.Price}
            //             levels={value.Level}
            //             qualification={value.Qualification}
            //             location={value.Location}
            //             image={
            //             './guy1.jpg'
            //             }
            //         />
            //         </Grid>
            //     )
            //     break;
        // }
        
    }

  return (
    <div>
      <Grid classes={gridStyles} container spacing={4}>
        {items}
      </Grid>
      <div className={classes.paginationStyle}>
        <Pagination count={totalPages} size="large" onChange={handleChange} />
      </div>
    </div>
  );
});
export default Results
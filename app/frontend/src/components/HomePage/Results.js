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

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
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
}));

const CustomCard = ({ classes, image, name, bio, levels, subject, price, location, qualification }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.name} variant={'h2'}>
            {name}
          </Typography>
          <Typography className={classes.bio}>{bio}</Typography>
          <Typography className={classes.subject}>{levels} {subject}</Typography>
          <Typography className={classes.price}>${price}/hr</Typography>
          <Typography className={classes.location}>Nearest MRT: {location}</Typography>
          <Typography className={classes.qualification}>Highest Qualification: {location}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};


const tutorResults = [
    { Name: 'Tan Ah Seng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'Degree', Location: 'Eunos', userId: 3 },
    { Name: 'Tan Ah Beng', Bio: 'Lulser', Price: '70', 
    Level: 'JC', Gender: 'Male', Qualification: 'O-level', Location: 'Dhoby Ghaut', userId: 1 },
    { Name: 'Tan Ah Feng', Bio: 'Drunkard', Price: '40', 
    Level: 'Primary School', Gender: 'Female', Qualification: 'Degree', Location: 'Jurong', userId: 4 },
    { Name: 'Ah Leng', Bio: 'Good lessons efficinet fast', Price: '60', 
    Level: 'Primary School', Gender: 'Male', Qualification: 'A-level', Location: 'Dakota', userId: 5 },
    { Name: 'Ah Peng', Bio: 'Football', Price: '50', 
    Level: 'Sec School', Gender: 'Female', Qualification: 'Masters', Location: 'Downtown Line', userId: 2 },
]

// const gridStyles = useGridStyles();
// const styles = useStyles({ color: '#203f52' });
// const styles2 = useStyles({ color: '#4d137f' });
// const styles3 = useStyles({ color: '#ff9900' });
// const styles4 = useStyles({ color: '#34241e' });



export const Results = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });

  const items = []
  const randomStyles = [styles,styles2,styles3,styles4];
    for (const [index, value] of tutorResults.entries()) {
        // items.push(<li key={index}>{value}</li>)s
        let min = 1;
        let max = 4;
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(rand);
        switch(rand){
            case 1:
                items.push(
                    <Grid item>
                    <CustomCard
                        key={value.userId}
                        classes={styles}
                        name={value.Name}
                        bio={value.Bio}
                        subject={value.Subject}
                        image={
                        './guy1.jpg'
                        }
                    />
                    </Grid>
                )
                break;
            case 2:
                items.push(
                    <Grid item>
                    <CustomCard
                        key={value.userId}
                        classes={styles2}
                        name={value.Name}
                        bio={value.Bio}
                        subject={value.Subject}
                        image={
                        './guy1.jpg'
                        }
                    />
                    </Grid>
                )
                break;
            case 3:
                items.push(
                    <Grid item>
                    <CustomCard
                        key={value.userId}
                        classes={styles3}
                        name={value.Name}
                        bio={value.Bio}
                        subject={value.Subject}
                        image={
                        './guy1.jpg'
                        }
                    />
                    </Grid>
                )
                break;
            case 4:
                items.push(
                    <Grid item>
                    <CustomCard
                        key={value.userId}
                        classes={styles4}
                        name={value.Name}
                        bio={value.Bio}
                        subject={value.Subject}
                        image={
                        './guy1.jpg'
                        }
                    />
                    </Grid>
                )
                break;
        }
        
    }

  return (
    <>
      <Grid classes={gridStyles} container spacing={4}>
        {items}
      </Grid>
    </>
  );
});
export default Results
import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Grid from '@material-ui/core/Grid';
import "./NoticeBoard.css";

function NoticeBoard() {
    // const classes = useStyles();
    const imageOne = './carousel3.jpg';
    const imageTwo= './carousel1.jpg';
    const imageThree = './carousel2.jpg';

    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./testtest1.jpg"
                alt="First slide"
                style={{height:"500px"}}
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./testtest2.jpg"
                alt="Second slide"
                style={{height:"500px"}}
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100 h-30"
                src="./testtest3.jpg"
                alt="Third slide"
                style={{height:"500px"}}
                />
            </Carousel.Item>
        </Carousel>
    );
}



export default NoticeBoard;
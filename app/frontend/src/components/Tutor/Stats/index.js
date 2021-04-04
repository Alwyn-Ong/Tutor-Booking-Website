import {
  Button,
  Card,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import { CardBody, CardTitle } from "reactstrap";
import "../../Dashboard/base.css";
import DoughnutExample from "./Doughnut";
import RadarExample from "./Radar";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import { useDispatch } from "react-redux";
import { updateCompare } from "../../../actions/authActions";
import { NavLink as RouterLink } from "react-router-dom";

const Index = ({ tutorId }) => {
  const dispatch = useDispatch();
  const updateCompareDispatch = (tutorId) => {
    dispatch(updateCompare(tutorId));
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} container justify="space-between">
          <Grid item>
            <Typography>
              <AssessmentOutlinedIcon /> Statistics
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title="Compare with another tutor">
              <Button
                onClick={() => updateCompareDispatch(tutorId)}
                component={RouterLink}
                to={"/"}
              >
                Compare
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Card className="main-card mb-4">
            <CardBody>
              <Tooltip title="Breakdown of type of students">
                <div>
                  <CardTitle>Students</CardTitle>
                </div>
              </Tooltip>
              <DoughnutExample />
            </CardBody>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="main-card mb-4">
            <CardBody>
              {/* <Tooltip title="See how this tutor fares compared to the normalised average of all tutors."> */}
              <Tooltip
                title={
                  <>
                    <p>
                      See how this tutor fares compared to the normalised
                      average of all tutors.
                    </p>
                    <p>
                      The average tutor's score would be 50 and anything more
                      than 50 is above average, and vice versa.
                    </p>
                  </>
                }
              >
                <div>
                  <CardTitle>Comparing to other tutors</CardTitle>
                </div>
              </Tooltip>
              <RadarExample />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;

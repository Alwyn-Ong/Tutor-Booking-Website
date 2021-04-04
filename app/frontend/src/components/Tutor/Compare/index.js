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
import { resetCompare } from "../../../actions/authActions";
import { NavLink as RouterLink } from "react-router-dom";

const Index = ({ tutorId }) => {
  const dispatch = useDispatch();
  const updateResetDispatch = () => {
    dispatch(resetCompare());
  };
  return (
    <div>
        <Grid container>

        <Grid item xs={12} container justify="space-between">
          <Grid item>
            <Typography>
              <AssessmentOutlinedIcon /> Statistics
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title="Reset Comparison">
              <Button
                onClick={() => updateResetDispatch(tutorId)}
                component={RouterLink}
                to={`/tutor/${tutorId}`}
              >
                Reset
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <CardBody>
              <Tooltip title="Breakdown of type of students">
                <div>
                  <CardTitle>Students for User 1</CardTitle>
                </div>
              </Tooltip>
              <DoughnutExample />
            </CardBody>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <CardBody>
              <Tooltip title="Breakdown of type of students">
                <div>
                  <CardTitle>Students for User 2</CardTitle>
                </div>
              </Tooltip>
              <DoughnutExample />
            </CardBody>
          </Card>
        </Grid>
        <Grid item md={12} xs={12}>
          <Card>
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

import { Card, Grid, Paper, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import { CardBody, CardTitle } from "reactstrap";
import "../../Dashboard/base.css";
import DoughnutExample from "./Doughnut";
import RadarExample from "./Radar";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";

const index = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>
            <AssessmentOutlinedIcon /> Statistics
          </Typography>
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
              <Tooltip title="See this tutor as compared to the average of all tutors">
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

export default index;

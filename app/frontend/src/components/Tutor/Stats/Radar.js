import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  // labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  labels: ["Price", "Reviews", "Rating", "Subjects", "Timeslots"],
  datasets: [
    // {
    //   label: "Average Tutor",
    //   backgroundColor: "rgba(179,181,198,0.2)",
    //   borderColor: "rgba(179,181,198,1)",
    //   pointBackgroundColor: "rgba(179,181,198,1)",
    //   pointBorderColor: "#fff",
    //   pointHoverBackgroundColor: "#fff",
    //   pointHoverBorderColor: "rgba(179,181,198,1)",
    //   data: [50, 50, 50, 50, 50],
    // },
    {
      label: "Current Tutor",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [
        Math.ceil(Math.random() * 85 + 15),
        Math.ceil(Math.random() * 85 + 15),
        Math.ceil(Math.random() * 85 + 15),
        Math.ceil(Math.random() * 85 + 15),
        Math.ceil(Math.random() * 85 + 15),
      ],
    },
  ],
};

class RadarExample extends React.Component {
  render() {
    return (
      <div>
        <Radar data={data} />
      </div>
    );
  }
}

export default RadarExample;

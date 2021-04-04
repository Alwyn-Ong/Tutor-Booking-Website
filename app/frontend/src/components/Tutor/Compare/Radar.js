import React from "react";
import { Radar } from "react-chartjs-2";



class RadarExample extends React.Component {
  render() {
    const data = {
      // labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      labels: ["Price", "Reviews", "Rating", "Subjects", "Timeslots"],
      datasets: [
        {
          label: "Tutor 1",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [
            Math.ceil(Math.random() * 85 + 15),
            Math.ceil(Math.random() * 85 + 15),
            Math.ceil(Math.random() * 85 + 15),
            Math.ceil(Math.random() * 85 + 15),
            Math.ceil(Math.random() * 85 + 15),
          ],
        },
        {
          label: "Tutor 2",
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
    return (
      <div>
        <Radar data={data} />
      </div>
    );
  }
}

export default RadarExample;

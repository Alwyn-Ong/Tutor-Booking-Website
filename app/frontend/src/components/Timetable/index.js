import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./index.css";

const generateTimeSlots = () => {
  return Array.from({ length: 13 }, (_, i) => i + 10 + "00");
};

const generateStateMatrix = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );
};

const getUniqueRows = (data) => {
  let arr = [];
  let current = "-1";
  for (const d of data) {
    let timeslot = d.split("-")[1];
    if (timeslot !== current) {
      arr.push(timeslot);
      current = timeslot;
    }
  }
  return arr;
};

// console.log(checkTimeSlots(generateTimeSlots(),"1-1000"))

const Timetable = ({isTutor}) => {
  let days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let timeslots = generateTimeSlots();

  console.log(timeslots);

  let data = ["1-1000", "2-1000", "4-1000", "1-1100", "3-1700"];

  // const cellDefault = [
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false],
  // ];

  let uniqueRows = getUniqueRows(data);

  console.log(uniqueRows);

  // const cellDefault = generateStateMatrix(uniqueRows.length + 1, 14);
  const cellDefault = generateStateMatrix(14, 14);

  const [cells, setCells] = React.useState(cellDefault);

  const handleChange = (state) => {
    setCells(state);
  };

  const handleReset = () => {
    setCells(cellDefault);
  };

  const handleUpdate = () => {
    setCells(cellDefault);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <TableDragSelect value={cells} onChange={handleChange}>
          <tr>
            {days.map((day, index) => {
              return (
                <td disabled>
                  <Typography>{day}</Typography>
                </td>
              );
            })}
          </tr>

          {timeslots.map((timeslot) => {
            // {uniqueRows.map((timeslot) => {
            return (
              <tr>
                <td disabled>
                  <Typography>{timeslot}</Typography>
                </td>
                {days.slice(1).map((day, dayIndex) => {
                  console.log(dayIndex + 1 + "-" + timeslot);
                  return data.includes(dayIndex + 1 + "-" + timeslot) || isTutor ? (
                    <td />
                  ) : (
                    <td disabled />
                  );
                })}
              </tr>
            );
          })}
        </TableDragSelect>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item>
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Timetable;

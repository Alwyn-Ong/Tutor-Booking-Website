import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./index2.css";

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

const Timetable = ({ isTutor, data, setProfileData }) => {
  let days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  console.log(data);

  let timeslots = generateTimeSlots();

  // let data = ["1-1000", "2-1000", "4-1000", "1-1100", "3-1700"];

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

  // const cellDefault = generateStateMatrix(uniqueRows.length + 1, 14);
  const cellDefault = generateStateMatrix(14, 14);

  const [cells, setCells] = React.useState(cellDefault);

  if (isTutor) {
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        if(data.includes(`${j}-${timeslots[i - 1]}`)){
          cells[i][j] = true
        }
      }
    }
  }

  const handleChange = (state) => {
    setCells(state);
  };

  const handleReset = () => {
    setCells(cellDefault);
  };

  const handleUpdate = () => {
    let newData = [];
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        if (cells[i][j]) {
          newData.push({ timeslot: `${j}-${timeslots[i - 1]}` });
        }
      }
    }
    if (setProfileData) {
      setProfileData((state) => {
        return {
          ...state,
          timeslots: newData,
        };
      });
    }
    console.log(newData);
    // setCells(cellDefault);
  };

  console.log(cells);

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
                  return data.includes(dayIndex + 1 + "-" + timeslot) ||
                    isTutor ? (
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

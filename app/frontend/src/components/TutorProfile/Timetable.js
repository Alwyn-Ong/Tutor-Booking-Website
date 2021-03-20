import { Button, Grid, Typography } from "@material-ui/core";
import { SystemUpdate } from "@material-ui/icons";
import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./timetable.css";

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

const Timetable = (props) => {
  let days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let TIME = ["aaa", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200"];

  let timeslots = generateTimeSlots();


  let data = ["1-1000", "2-1000", "3-1000", "4-1000", "5-1000", "6-1000", "7-1000",
              "1-1100", "2-1100", "3-1100", "4-1100", "5-1100", "6-1100", "7-1100",
              "1-1200", "2-1200", "3-1200", "4-1200", "5-1200", "6-1200", "7-1200",
              "1-1300", "2-1300", "3-1300", "4-1300", "5-1300", "6-1300", "7-1300",
              "1-1400", "2-1400", "3-1400", "4-1400", "5-1400", "6-1400", "7-1400",
              "1-1500", "2-1500", "3-1500", "4-1500", "5-1500", "6-1500", "7-1500",
              "1-1600", "2-1600", "3-1600", "4-1600", "5-1600", "6-1600", "7-1600",
              "1-1700", "2-1700", "3-1700", "4-1700", "5-1700", "6-1700", "7-1700",
              "1-1800", "2-1800", "3-1800", "4-1800", "5-1800", "6-1800", "7-1800",
              "1-1900", "2-1900", "3-1900", "4-1900", "5-1900", "6-1900", "7-1900",
              "1-2000", "2-2000", "3-2000", "4-2000", "5-2000", "6-2000", "7-2000",
              "1-2100", "2-2100", "3-2100", "4-2100", "5-2100", "6-2100", "7-2100",
              "1-2200", "2-2200", "3-2200", "4-2200", "5-2200", "6-2200", "7-2200"
            ];

  let uniqueRows = getUniqueRows(data);


  // const cellDefault = generateStateMatrix(uniqueRows.length + 1, 14);
  const cellDefault = generateStateMatrix(14,8)

  const handleChange = (state) => {
    props.setCells(state);
    var result = [];
    for (var i=1; i<state.length; i++){
      state[i].forEach((item, index) => item === true ? result.push(index+"-"+TIME[i]) : null)
    }
   props.setOpenTimeSlot(result);
  };

  const handleReset = () => {
    props.setCells(cellDefault);
  };

  const handleUpdate = () => {
    props.setCells(cellDefault);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <TableDragSelect value={props.cells} onChange={handleChange}>
          <tr>
            {days.map((day) => {
              return (
                <td keys={day} disabled>
                  {day}
                </td>
              );
            })}
          </tr>

          {timeslots.map((timeslot) => {
            // {uniqueRows.map((timeslot) => {
            return (
              <tr>
                <td disabled>
                  {timeslot}
                </td>
                {days.slice(1).map((day, dayIndex) => {
                  return data.includes(dayIndex + 1 + "-" + timeslot) ? (
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
    </Grid>
  );
};

export default Timetable;

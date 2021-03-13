import { Typography } from "@material-ui/core";
import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./index.css";

const generateTimeSlots = () => {
  return Array.from({ length: 13 }, (_, i) => i + 10 + "00");
};

const checkTimeSlots = (timeslots, timeslot) => {
  return timeslots.includes(timeslot) ? <td disabled /> : <td />;
};

// console.log(checkTimeSlots(generateTimeSlots(),"1-1000"))

const Timetable = () => {
  let days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let timeslots = generateTimeSlots();

  let data = ["1-1000", "2-1000", "4-1000"];

  const [cells, setCells] = React.useState([
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ]);

  const handleChange = (state) => {
    setCells(state);
  };

  const handleClick = () => {
    const cells = [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ];
    setCells(cells);
  };

  return (
    <div>
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
        {timeslots.map((time, timeSlotIndex) => {
          return (
            <tr>
              
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          );
        })}
        <tr>
          <td disabled>{timeslots[0]}</td>
          <td disabled />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
        <tr>
          <td disabled>11:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
        <tr>
          <td disabled>12:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
        <tr>
          <td disabled>13:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
        <tr>
          <td disabled>14:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
        <tr>
          <td disabled>15:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
        <tr>
          <td disabled>16:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td></td>
        </tr>
      </TableDragSelect>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};

export default Timetable;

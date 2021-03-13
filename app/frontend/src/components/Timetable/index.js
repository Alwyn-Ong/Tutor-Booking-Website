import { Typography } from "@material-ui/core";
import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./index.css";

const generateTimeSlots = () => {
  return Array.from({ length: 13 }, (_, i) => i + 10 + "00");
};

console.log(generateTimeSlots());

const checkTimeSlots = (timeslots, timeslot) => {
  return timeslots.includes(timeslot) ? <td disabled /> : <td />;
};

// console.log(checkTimeSlots(generateTimeSlots(),"1-1000"))

class Timetable extends React.Component {
  days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  timeslots = generateTimeSlots();

  data = ["1-1000", "2-1000", "4-1000"];

  state = {
    cells: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  };

  render = () => (
    <div>
      <TableDragSelect value={this.state.cells} onChange={this.handleChange}>
        <tr>
          {this.days.map((day, index) => {
            return (
              <td disabled>
                <Typography>{day}</Typography>
              </td>
            );
          })}
        </tr>
        {/* {this.timeslots.map((time, timeSlotIndex) => {
          return (
            <tr>
              {this.days.map((day, dayIndex) => {
                return dayIndex === 0 ? (
                  <td>{time}</td>
                ) : (
                  checkTimeSlots(
                    this.data,
                    dayIndex.toString().concat("-", time)
                  )
                );
              })}
            </tr>
          );
        })} */}
        <tr>
          <td disabled>{this.timeslots[0]}</td>
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
      <button onClick={this.handleClick}>Reset</button>
    </div>
  );

  handleChange = (cells) => this.setState({ cells });

  handleClick = () => {
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
    this.setState({ cells });
  };
}

export default Timetable;

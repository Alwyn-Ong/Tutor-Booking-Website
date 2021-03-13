import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./index.css";

class App extends React.Component {
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
          <td disabled />
          <td disabled>Mon</td>
          <td disabled>Tue</td>
          <td disabled>Wed</td>
          <td disabled>Thu</td>
          <td disabled>Fri</td>
          <td disabled>Sat</td>
          <td disabled>Sun</td>
        </tr>
        <tr>
          <td disabled>10:00</td>
          <td disabled/>
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
          <td>overtime</td>
        </tr>
        <tr>
          <td disabled>12:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>overtime</td>
        </tr>
        <tr>
          <td disabled>13:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>overtime</td>
        </tr>
        <tr>
          <td disabled>14:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>overtime</td>
        </tr>
        <tr>
          <td disabled>15:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>overtime</td>
        </tr>
        <tr>
          <td disabled>16:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>overtime</td>
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

export default App;

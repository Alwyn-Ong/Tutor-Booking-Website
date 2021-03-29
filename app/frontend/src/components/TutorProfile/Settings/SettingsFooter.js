/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import SaveButton from "./SaveButton";

export class SettingsFooter extends Component {
  /**
   * PropTypes
   *
   * @type {{settings: *, onPaneLeave: *}}
   */
  static propTypes = {
    settings: PropTypes.object.isRequired,
    onPaneLeave: PropTypes.func.isRequired,
    closeButtonClass: PropTypes.string,
    saveButtonClass: PropTypes.string,
    onSave: PropTypes.func,
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
    success: PropTypes.bool,
    setSuccess: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.closeClicked = this.closeClicked.bind(this);
  }

  /**
   * Close was clicked
   */
  closeClicked(ev) {
    ev.preventDefault();

    this.props.onPaneLeave(false, this.props.settings, this.props.settings);
  }

  /**
   * Render this component
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="settings-footer">
        <div className="settings-close">
          {/* <button
            className={this.props.closeButtonClass || "btn btn-default"}
            onClick={this.closeClicked}
          >
            Close
          </button> */}
        {/* <Button variant="contained" color="default" onClick={()=>{alert("Closed")}}>
          Close
        </Button> */}
        </div>
        {/* <button className={this.props.saveButtonClass || "btn btn-primary"}>
          Save
        </button> */}
        {/* <Button variant="contained" color="primary" onClick={this.props.onSave}>
          Save
        </Button> */}
        <SaveButton {...this.props}/>
      </div>
    );
  }
}

export default SettingsFooter;

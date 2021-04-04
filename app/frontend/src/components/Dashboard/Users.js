import { Typography } from "@material-ui/core";
// import React from "react";

import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classnames from "classnames";

import "./base.css";

import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
} from "reactstrap";

// import PageTitle from "../../../Layout/AppMain/PageTitle";

import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart,
} from "recharts";

import {
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faAngleDown,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Users = () => {
  const auth = useSelector((state) => state.auth);
  let userid = auth.id;

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  if (isLoading) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/getalltutees/" + userid, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <Row>
      <Col md="12">
        <Card className="main-card mb-3">
          <div className="card-header">
            Active Tutees
            {/* <div className="btn-actions-pane-right">
                        <div role="group" className="btn-group-sm btn-group">
                          <button className="active btn btn-info">
                            Last Week
                          </button>
                          <button className="btn btn-info">All Month</button>
                        </div>
                      </div> */}
          </div>
          <div className="table-responsive">
            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Name</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Gender</th>
                  <th className="text-center">Phone Number</th>
                  <th className="text-center">Location</th>
                  {/* <th className="text-center">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {users ? (
                  users.map((user, index) => {
                    return (
                      <tr>
                        <td className="text-center text-muted">{index}</td>
                        <td>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <div className="widget-content-left">
                                  <img
                                    width={40}
                                    className="rounded-circle"
                                    src={
                                      "http://localhost:8080/api/files/" +
                                        user.userId || ""
                                    }
                                    alt="Avatar"
                                  />
                                </div>
                              </div>
                              <div className="widget-content-left flex2">
                                <div className="widget-heading">
                                  {user.name || ""}
                                </div>
                                <div className="widget-subheading opacity-7">
                                  {user.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">{user.email || ""}</td>
                        <td className="text-center">{user.gender || ""}</td>
                        <td className="text-center">
                          {user.phoneNumber || ""}
                        </td>
                        <td className="text-center">{user.nearestMRT || ""}</td>
                        <td className="text-center">
                          <div className="badge badge-success">Current</div>
                        </td>
                        {/* <td className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm"
                                    >
                                      Details
                                    </button>
                                  </td> */}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="text-center text-muted">1</td>
                    <td>
                      <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                              <img
                                width={40}
                                className="rounded-circle"
                                //   src={
                                //     "http://localhost:8080/api/files/" +
                                //       user.userId || ""
                                //   }
                                alt="Avatar"
                              />
                            </div>
                          </div>
                          <div className="widget-content-left flex2">
                            <div className="widget-heading">No users yet</div>
                            <div className="widget-subheading opacity-7"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center"> </td>
                    <td className="text-center"> </td>
                    <td className="text-center"> </td>
                    <td className="text-center"> </td>
                    <td className="text-center">
                      <div className="badge badge-success"> </div>
                    </td>
                    {/* <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                Details
                              </button>
                            </td> */}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* <div className="d-block text-center card-footer">
                      <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                        <i className="pe-7s-trash btn-icon-wrapper"> </i>
                      </button>
                      <button className="btn-wide btn btn-success">Save</button>
                    </div> */}
        </Card>
      </Col>
    </Row>
  );
};

export default Users;

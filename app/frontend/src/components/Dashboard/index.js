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

// import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
// import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
// import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
// import avatar4 from "../../../assets/utils/images/avatars/4.jpg";
import { useSelector } from "react-redux";
import Users from "./Users";

const data = [
  { name: "Page A", Tutees: 2, pv: 15, amt: 2400 },
  { name: "Page B", Tutees: 3, pv: 13, amt: 2210 },
  { name: "Page C", Tutees: 2, pv: 5, amt: 2290 },
  { name: "Page D", Tutees: 2, pv: 39, amt: 2000 },
  { name: "Page E", Tutees: 1, pv: 28, amt: 2181 },
  { name: "Page F", Tutees: 2, pv: 38, amt: 2500 },
  { name: "Page G", Tutees: 2, pv: 43, amt: 2100 },
  { name: "Page C", Tutees: 2, pv: 28, amt: 2290 },
  { name: "Page D", Tutees: 1, pv: 49, amt: 2000 },
  { name: "Page E", Tutees: 2, pv: 58, amt: 2181 },
  { name: "Page F", Tutees: 1, pv: 18, amt: 1500 },
  { name: "Page G", Tutees: 4, pv: 13, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 5400, pv: 5240, amt: 1240 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div style={{ marginTop: "20px" }}>
            {/* <PageTitle
                heading="Basic Dashboard"
                subheading="This is an example dashboard created using build-in elements and components."
                icon="pe-7s-car icon-gradient bg-mean-fruit"
              /> */}
            <Row>
              <Col md="12" lg="6">
                <Card className="mb-3">
                  <CardHeader className="card-header-tab">
                    <div className="card-header-title">
                      <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                        {" "}
                      </i>
                      Overall Report
                    </div>
                    <div className="btn-actions-pane-right">
                      <Button
                        outline
                        className={
                          "border-0 btn-pill btn-wide btn-transition " +
                          classnames({
                            active: this.state.activeTab1 === "11",
                          })
                        }
                        color="primary"
                        onClick={() => {
                          this.toggle1("11");
                        }}
                      >
                        Tab 1
                      </Button>
                      <Button
                        outline
                        className={
                          "ml-1 btn-pill btn-wide border-0 btn-transition " +
                          classnames({
                            active: this.state.activeTab1 === "22",
                          })
                        }
                        color="primary"
                        onClick={() => {
                          this.toggle1("22");
                        }}
                      >
                        Tab 2
                      </Button>
                    </div>
                  </CardHeader>
                  <TabContent activeTab={this.state.activeTab1}>
                    <TabPane tabId="11">
                      <CardBody className="pt-2">
                        <Row className="mt-3">
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      20%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Rejected Requests
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="danger"
                                    value="20"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      81%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Satisfied Tutees
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="success"
                                    value="81"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <div className="divider mt-4" />
                        <Row>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      71%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Left a review
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="primary"
                                    value="71"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      11%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Unsatisfied Tutees
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="warning"
                                    value="11"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                      <div className="widget-chart p-0">
                        <div className="widget-chart-content">
                          <div className="widget-description mt-0 text-warning">
                            <FontAwesomeIcon icon={faArrowUp} />
                            <span className="pl-1">175.5%</span>
                            <span className="text-muted opacity-8 pl-1">
                              Concurrent Tutees
                            </span>
                          </div>
                        </div>
                        <ResponsiveContainer height={187}>
                          <AreaChart
                            data={data}
                            margin={{
                              top: -45,
                              right: 0,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <defs>
                              <linearGradient
                                id="colorPv2"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="10%"
                                  stopColor="var(--warning)"
                                  stopOpacity={0.7}
                                />
                                <stop
                                  offset="90%"
                                  stopColor="var(--warning)"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <Tooltip />
                            <Area
                              type="monotoneX"
                              dataKey="Tutees"
                              stroke="var(--warning)"
                              strokeWidth={2}
                              fillOpacity={1}
                              fill="url(#colorPv2)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </TabPane>
                    <TabPane tabId="22">
                      <div className="widget-chart p-0">
                        <ResponsiveContainer height={179}>
                          <ComposedChart data={data2}>
                            <CartesianGrid stroke="#ffffff" />
                            <Area
                              type="monotone"
                              dataKey="amt"
                              fill="#f7ffd0"
                              stroke="#85a200"
                            />
                            <Bar
                              dataKey="pv"
                              barSize={16}
                              fill="var(--primary)"
                            />
                            <Line
                              type="monotone"
                              dataKey="uv"
                              strokeWidth="3"
                              stroke="var(--danger)"
                            />
                          </ComposedChart>
                        </ResponsiveContainer>
                        <div className="widget-chart-content mt-3 mb-2">
                          <div className="widget-description mt-0 text-success">
                            <FontAwesomeIcon icon={faArrowUp} />
                            <span className="pl-2 pr-2">37.2%</span>
                            <span className="text-muted opacity-8">
                              performance increase
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardBody className="pt-2">
                        <Row>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      23%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Deploys
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="warning"
                                    value="23"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      76%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Traffic
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="info"
                                    value="76"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <div className="divider mt-4" />
                        <Row>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      83%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Servers Load
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="danger"
                                    value="83"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      48%
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Reported Bugs
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <Progress
                                    className="progress-bar-sm progress-bar-animated-alt"
                                    color="alternate"
                                    value="48"
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </TabPane>
                  </TabContent>
                </Card>
                <Row>
                  <Col lg="6">
                    <div className="card mb-3 widget-chart">
                      <div className="widget-chart-content">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-primary" />
                          <i className="lnr-graduation-hat text-primary" />
                        </div>
                        <div className="widget-numbers">43</div>
                        <div className="widget-subheading">New Tutees</div>
                        <div className="widget-description text-success">
                          <FontAwesomeIcon icon={faAngleUp} />
                          <span className="pl-1">175.5%</span>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper chart-wrapper-relative">
                        <ResponsiveContainer height={100}>
                          <LineChart
                            data={data}
                            margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                          >
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#3ac47d"
                              strokeWidth={3}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="card mb-3 widget-chart">
                      <div className="widget-chart-content">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-danger" />
                          <i className="lnr-envelope text-danger" />
                        </div>
                        <div className="widget-numbers">43</div>
                        <div className="widget-subheading">
                          Reviews Submitted
                        </div>
                        <div className="widget-description text-danger">
                          <FontAwesomeIcon icon={faAngleDown} />
                          <span className="pl-1">54.1%</span>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper chart-wrapper-relative">
                        <ResponsiveContainer height={100}>
                          <BarChart data={data}>
                            <Bar
                              dataKey="pv"
                              fill="#81a4ff"
                              stroke="#3f6ad8"
                              strokeWidth={2}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="12" lg="6">
                <Row>
                  <Col md="6">
                    <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-white opacity-10" />
                        <i className="lnr-calendar-full icon-gradient bg-arielle-smile" />
                      </div>
                      <div className="widget-numbers">10</div>
                      <div className="widget-subheading">
                        Months since joined
                      </div>
                      <div className="widget-description text-white">
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className="pl-1">54.9%</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                      <div className="icon-wrapper rounded">
                        <div className="icon-wrapper-bg bg-white opacity-10" />
                        <i className="lnr-screen icon-gradient bg-warm-flame" />
                      </div>
                      <div className="widget-numbers">149</div>
                      <div className="widget-subheading">Total Sessions</div>
                      <div className="widget-description text-white">
                        <span className="pr-1">62,7%</span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                      <div className="icon-wrapper rounded">
                        <div className="icon-wrapper-bg bg-dark opacity-9" />
                        <i className="lnr-graduation-hat text-white" />
                      </div>
                      <div className="widget-numbers">49</div>
                      <div className="widget-subheading">Total Tutees</div>
                      <div className="widget-description text-white">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="pl-1">72.1%</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="card mb-3 bg-love-kiss widget-chart card-border">
                      <div className="widget-chart-content text-white">
                        <div className="icon-wrapper rounded-circle">
                          <div className="icon-wrapper-bg bg-white opacity-4" />
                          <i className="lnr-eye" />
                        </div>
                        <div className="widget-numbers">458</div>
                        <div className="widget-subheading">
                          Total Profile Views
                        </div>
                        <div className="widget-description">
                          <FontAwesomeIcon
                            className="text-white opacity-5"
                            icon={faAngleUp}
                          />
                          <span className="text-white">175.5%</span>
                        </div>
                      </div>
                      <div className="widget-chart-wrapper">
                        <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                          <LineChart
                            data={data}
                            margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                          >
                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#ffffff"
                              strokeWidth={3}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="card mb-3 widget-chart">
                  <div className="widget-chart-content">
                    <div className="icon-wrapper rounded-circle">
                      <div className="icon-wrapper-bg bg-warning" />
                      <i className="lnr-heart icon-gradient bg-premium-dark">
                        {" "}
                      </i>
                    </div>
                    <div className="widget-numbers">4.5</div>
                    <div className="widget-subheading">Overall Rating</div>
                    <div className="widget-description">
                      Down by
                      <span className="text-danger pl-1 pr-1">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="pl-1">54.1%</span>
                      </span>
                      from 30 days ago
                    </div>
                  </div>
                  <div className="widget-chart-wrapper chart-wrapper-relative">
                    <ResponsiveContainer height={100}>
                      <LineChart
                        data={data2}
                        margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                      >
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#d6b5ff"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="uv"
                          stroke="#a75fff"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-danger">
                              71%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow="71"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "71%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">
                            Income Target
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-success">
                              54%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                aria-valuenow="54"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "54%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">
                            Expenses Target
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-warning">
                              32%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow="32"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "32%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">
                            Spendings Target
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left pr-2 fsize-1">
                            <div className="widget-numbers mt-0 fsize-3 text-info">
                              89%
                            </div>
                          </div>
                          <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                aria-valuenow="89"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "89%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                          <div className="text-muted opacity-6">
                            Totals Target
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            <Users/>
            {/* <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-primary" />
                        <i className="lnr-cog text-primary" />
                      </div>
                      <div className="widget-numbers">49</div>
                      <div className="widget-subheading">Total Reviews</div>
                      <div className="widget-description text-success">
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className="pl-1">175.5%</span>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                        <LineChart
                          data={data}
                          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                        >
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#3ac47d"
                            strokeWidth={3}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-success" />
                        <i className="lnr-screen text-success" />
                      </div>
                      <div className="widget-numbers">17.2k</div>
                      <div className="widget-subheading">Profiles</div>
                      <div className="widget-description text-warning">
                        <span className="pr-1">175.5%</span>
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                        <AreaChart
                          data={data}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <Area
                            type="monotoneX"
                            dataKey="uv"
                            stroke="#fd7e14"
                            fill="#ffb87d"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="icon-wrapper rounded-circle">
                        <div className="icon-wrapper-bg bg-danger" />
                        <i className="lnr-laptop-phone text-danger" />
                      </div>
                      <div className="widget-numbers">5.82k</div>
                      <div className="widget-subheading">Reports Submitted</div>
                      <div className="widget-description text-danger">
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className="pl-1">54.1%</span>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper">
                      <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
                        <BarChart data={data}>
                          <Bar
                            dataKey="uv"
                            fill="#81a4ff"
                            stroke="#3f6ad8"
                            strokeWidth={2}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
              </Row> */}
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { TabContent, Nav, NavItem, NavLink } from "reactstrap";
import TextFieldGroup from "../../common/TextFieldGroup";
import classnames from "classnames";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
import SelectListGroup from "../../common/SelectListGroup";
import { getJobsByName, getDayOfJobs } from "../../../actions/parentActions";
import { getJobs } from "../../../actions/parentActions";
import isEmpty from "../../../validation/is-empty";

class ParentSchedule extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      chores: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getDayOfJobs();
  }
  onChildSelect = e => {};

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  // onChange function
  onChange(e) {
    const childName = e.target.value;
    this.props.getJobsByName(childName);
  }

  componentWillReceiveProps(nextProps) {
    const jobsByName = nextProps.jobsByName.jobsByName;
    const chores = nextProps.chores.chores;
    console.log("chores: ", chores);
    this.setState({ chores: chores });

    if (nextProps.jobsByName.jobsByName) {
      // if reward field does not exist, make empty string
      jobsByName.jobName = !isEmpty(jobsByName.jobName)
        ? jobsByName.jobName
        : "";

      console.log("jobs: ", jobsByName);
    }
  }

  render() {
    const errors = this.state.errors;
    console.log("this.state.chores: ", this.state.chores);

    // Select options for status
    const child = [
      { label: "Select a child:", value: 0 },
      { label: "Robbie", value: "Robbie" },
      { label: "Brinlee", value: "Brinlee" },
      { label: "Lucito", value: "Lucito" }
    ];

    return (
      <div>
        <div>
          <SelectListGroup
            placeholder="Reward Name"
            name="childName"
            value={this.state.childName}
            onChange={this.onChange}
            error={errors}
            options={child}
            info="Name of the reward"
          />
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Monday
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Tuesday
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Wednesday
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Thursday
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Friday
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              Saturday
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggle("7");
              }}
            >
              Sunday
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <Monday />
          <Tuesday />
          <Wednesday />
          <Thursday />
          <Friday />
          <Saturday />
          <Sunday />
        </TabContent>
      </div>
    );
  }
}

ParentSchedule.propTypes = {
  getJobsByName: PropTypes.func.isRequired,
  jobsByName: PropTypes.object.isRequired,
  getDayOfJobs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  jobsByName: state.jobsByName,
  chores: state.chores
});

export default connect(
  mapStateToProps,
  { getJobsByName, getJobs, getDayOfJobs }
)(withRouter(ParentSchedule));

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { TabContent, Nav, NavItem, NavLink } from "reactstrap";
import { getDayOfJobs } from "../../../actions/parentActions";
import JobsByName from "./JobsByName";

class ParentSchedule extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getDayOfJobs();
  }

  // onChange function
  onChange(e) {
    const childName = e.target.value;
    this.setState({ childName: childName });

    this.props.getJobsByName(childName);
  }

  render() {
    return (
      <div>
        <JobsByName />
      </div>
    );
  }
}

ParentSchedule.propTypes = {
  getDayOfJobs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  chores: state.chores
});

export default connect(
  mapStateToProps,
  { getDayOfJobs }
)(withRouter(ParentSchedule));

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {} from "reactstrap";
import classnames from "classnames";
import { getDayOfJobs } from "../../../actions/parentActions";
import JobsByName from "./JobsByName";

class Schedule extends Component {
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

Schedule.propTypes = {
  getDayOfJobs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  chores: state.chores
});

export default connect(
  mapStateToProps,
  { getDayOfJobs }
)(withRouter(Schedule));

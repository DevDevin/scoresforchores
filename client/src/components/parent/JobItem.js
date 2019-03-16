import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class JobItem extends Component {
  render() {
    const { job } = this.props;
    console.log("this is job: ", job);

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src="" alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{job.jobName}</h3>
            <p>
              {job.jobName}{" "}
              {isEmpty(job.jobName) ? null : <span>at {job.jobName}</span>}
            </p>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Job Set</h4>
            <ul className="list-group">
              {job.jobName.slice(0, 4).map((Job, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {Job}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

JobItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobItem;

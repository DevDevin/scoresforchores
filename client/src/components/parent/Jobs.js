import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getJobs } from "../../actions/parentActions";

class Jobs extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    const { jobs, loading } = this.props.job;
    console.log(jobs);
    let jobItems;

    if (jobs === null || loading) {
      jobItems = <Spinner />;
    } else {
      if (jobs.length > 0) {
        jobItems = jobs.map(job => (
          <tbody>
            <tr>
              <td>{job.jobName}</td>
              <td>{job.description}</td>
              <td>{job.points}</td>
              <td>Edit Job</td>
              <td>Delete Job</td>
            </tr>
          </tbody>
        ));
      } else {
        jobItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Description</th>
                    <th>Points</th>
                  </tr>
                </thead>
                {jobItems}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.jobs
});

export default connect(
  mapStateToProps,
  { getJobs }
)(Jobs);

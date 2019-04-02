import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getJobs } from "../../actions/parentActions";
import { deleteJob } from "../../actions/parentActions";
import EditJobModal from "../parent/EditJobModal";

class Jobs extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  onDeleteClick(id) {
    this.props.deleteJob(id);
    this.props.history.push("/jobs");
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
              <td key={job._id}>{job.jobName}</td>
              <td key={job._id}>{job.description}</td>
              <td key={job._id}>{job.points}</td>
              <td key={job._id}>
                <EditJobModal jobID={job._id} />
              </td>
              <td key={job._id}>
                <button
                  onClick={this.onDeleteClick.bind(this, job._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
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
              <Table borderless>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Description</th>
                    <th>Points</th>
                    <th>Edit Job</th>
                    <th>Delete Job</th>
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
  deleteJob: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.jobs
});

export default connect(
  mapStateToProps,
  { getJobs, deleteJob }
)(Jobs);

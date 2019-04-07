import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../common/Spinner";
import { getJobs } from "../../../actions/parentActions";
import { deleteJob } from "../../../actions/parentActions";
import EditJobModal from "../../parent/EditJobModal";

class JobsByName extends Component {
  componentDidMount() {
    this.props.getJobs();
    this.setState({ chores: this.props.chores });
  }

  onDeleteClick(id) {
    this.props.deleteJob(id);
    this.props.history.push("/jobs");
  }

  render() {
    const { chores, loading } = this.props.chores;

    if (chores != null) {
      // get chores according to name and day
      let newChores = chores.filter(function(obj) {
        return obj.childName === "Brinlee" && obj.day === "Monday";
      });

      console.log("newChores", newChores);
      jobItems = newChores.map(job => (
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
    }

    let jobItems;

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Childs Jobs</h1>

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
                <tbody />
                {jobItems}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

JobsByName.propTypes = {
  getJobs: PropTypes.func.isRequired,
  deleteJob: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  chores: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.jobs,
  chores: state.chores
});

export default connect(
  mapStateToProps,
  { getJobs, deleteJob }
)(JobsByName);

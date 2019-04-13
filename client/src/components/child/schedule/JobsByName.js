import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../common/Spinner";
import { getJobs } from "../../../actions/parentActions";
import { deleteDayOfJob, getJobsByName } from "../../../actions/parentActions";
import EditJobModal from "../../parent/EditJobModal";
import SelectListGroup from "../../common/SelectListGroup";
import CompletionRequestModal from "./CompletionRequestModal";

class JobsByName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dayOfWeek: "",
      childName: ""
    };

    this.onChangeChild = this.onChangeChild.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
  }

  onDeleteClick(id) {
    this.props.deleteDayOfJob(id);
    // this.props.history.push("/jobs");
  }

  // onChange day
  onChangeChild(e) {
    const childName = e.target.value;
    this.setState({ childName: childName });
  }

  // onChange child
  onChangeDay(e) {
    const dayOfWeek = e.target.value;
    this.setState({ dayOfWeek: dayOfWeek });
  }

  render() {
    // const { user } = this.props.auth;
    // console.log("user: ", user);

    const errors = this.state.errors;
    const { chores, loading } = this.props.chores;
    const day = this.state.dayOfWeek;
    const childName = this.state.childName;
    let jobItems;

    if (chores != null) {
      let newChores;
      // get chores according to name and day
      newChores = chores.filter(function(obj) {
        return obj.childName === "Brinlee" && obj.day === day;
      });

      console.log("newChores", newChores);
      jobItems = newChores.map(job => (
        <tbody>
          <tr>
            <td key={job._id}>{job.jobName}</td>
            <td key={job._id}>{job.description}</td>
            <td key={job._id}>{job.points}</td>
            <td key={job._id}>
              <CompletionRequestModal dayOfJobID={job._id} />
            </td>
          </tr>
        </tbody>
      ));
    }

    // Select options for status
    const dayOfWeek = [
      { label: "Select a Day:", value: 0 },
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wednesday", value: "Wednesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" },
      { label: "Saturday", value: "Saturday" },
      { label: "Sunday", value: "Sunday" }
    ];

    return (
      <div className="profiles">
        <div>
          <SelectListGroup
            placeholder=""
            name="dayOfWeek"
            value={this.state.dayOfWeek}
            onChange={this.onChangeDay}
            error={errors}
            options={dayOfWeek}
            info="Day of week"
          />
        </div>
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
                    <th>Complete Job</th>
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
  deleteDayOfJob: PropTypes.func.isRequired,
  chores: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chores: state.chores
});

export default connect(
  mapStateToProps,
  { deleteDayOfJob }
)(JobsByName);

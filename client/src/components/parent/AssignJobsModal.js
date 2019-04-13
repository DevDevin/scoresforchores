import React, { Component } from "react";
import SelectListGroup from "../common/SelectListGroup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addDayOfJob } from "../../actions/parentActions";

// *** Consider turning this into a navbar component that can be used in each day of the week.
// That way once this is done we only have to add a single component to each day of the week
// rather than a bunch of stuff. I could have things like a select child button in here to toggle between
// which child's chores are being viewed.

class AssignJobsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      childName: "",
      jobName: "",
      day: ""
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    //TODO: SET STATE BY TARGET AND CALL ADD DAYOFJOB FUNCTION
    // create newjob object to submit to addjob function
    // need to set the newjob values to props. But first I need to pass in propss
    const newJob = {
      jobName: this.state.jobName,
      childName: this.state.childName,
      day: this.state.day,
      points: this.state.points,
      description: this.state.description,
      jobID: this.props.jobID,
      complete: false,
      description: "description filler",
      status: "assigned",
      points: 10
    };

    //call the edit job function
    this.props.addDayOfJob(newJob, this.props.history);
  }

  // onChange function
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const errors = this.state.errors;

    // Select options for job
    const jobs = [
      { label: "Choose a job:", value: 0 },
      { label: "Job 1", value: "Job 1" },
      { label: "Job 2", value: "Job 2" },
      { label: "Job 3", value: "Job 3" },
      { label: "Job 4", value: "Job 4" },
      { label: "Job 5", value: "Job 5" }
    ];

    // Select options for childName
    const children = [
      { label: "Choose a child:", value: 0 },
      { label: "Brinlee", value: "Brinlee" },
      { label: "Robbie", value: "Robbie" },
      { label: "Lucito", value: "Lucito" }
    ];

    // Select options for day
    const dayOfTheWeek = [
      { label: "Choose a day:", value: 0 },
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wednesday", value: "Wednesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" },
      { label: "Saturday", value: "Tuesday" },
      { label: "Sunday", value: "Sunday" }
    ];

    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
          Add Job
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Assign Job</ModalHeader>
          <ModalBody>
            <p>
              Assign Job for {this.props.childName} on {this.props.day}
            </p>
            <p>{this.props.childName}</p>
            <div>
              <form onSubmit={this.onSubmit}>
                <SelectListGroup
                  placeholder="Child Name"
                  name="childName"
                  value={this.state.childName}
                  onChange={this.onChange}
                  error={errors}
                  options={children}
                  info="Child to whom the job is being assigned."
                />
                <SelectListGroup
                  placeholder="Job Name"
                  name="jobName"
                  value={this.state.jobName}
                  onChange={this.onChange}
                  error={errors}
                  options={jobs}
                  info="Job that is being assigned."
                />
                <SelectListGroup
                  placeholder="Day"
                  name="day"
                  value={this.state.day}
                  onChange={this.onChange}
                  error={errors}
                  options={dayOfTheWeek}
                  info="Day of the week for which job is being assigned."
                />
              </form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.submitChange}
              onClick={this.toggle}
            >
              Sumbit Changes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div />
      </div>
    );
  }
}

AssignJobsModal.propTypes = {
  addDayOfJob: PropTypes.func.isRequired,
  addJob: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //
});

export default connect(
  mapStateToProps,
  { addDayOfJob }
)(withRouter(AssignJobsModal));

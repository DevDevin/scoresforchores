import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditReward from "./EditReward";
import { editJob, getSelectedJob } from "../../actions/parentActions";
import isEmpty from "../../validation/is-empty";

class EditJobModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobID: "",
      modal: false,
      jobName: "",
      points: 0,
      description: "",
      errors: {}
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.job.job) {
      const changedJob = nextProps.job.job;

      // if reward field does not exist, make empty string
      changedJob.jobName = !isEmpty(changedJob.jobName)
        ? changedJob.jobName
        : "";
      changedJob.description = !isEmpty(changedJob.description)
        ? changedJob.description
        : "";
      changedJob._id = !isEmpty(changedJob._id) ? changedJob._id : "";

      // Set component fields state
      this.setState({
        jobName: changedJob.jobName,
        points: changedJob.points.toString(),
        description: changedJob.description
        // rewardID: changedJob._id.toString()
        //rewardID: "5c9ad1c363511665b8472a82"
      });
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    // get data back for the selected rewarded
    this.props.getSelectedJob(this.props.jobID);

    // create newjob object to submit to addjob function
    // need to set the newjob values to props. But first I need to pass in propss
    const newJob = {
      jobName: this.state.jobName,
      points: this.state.points,
      description: this.state.description,
      jobID: this.props.jobID
    };
    const job = this.props.job.job;

    //call the edit job function
    this.props.editJob(newJob, this.props.history);
  }

  // onChange function
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const errors = this.state.errors;

    return (
      <div>
        <Button color="warning" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <p>Hello</p>
            <div>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Reward Name"
                  name="jobName"
                  value={this.state.jobName}
                  onChange={this.onChange}
                  error={errors.rewardName}
                  info="Name of the reward"
                />
                <TextFieldGroup
                  placeholder="points"
                  name="points"
                  value={this.state.points}
                  onChange={this.onChange}
                  error={errors.points}
                  info="Points required to earn reward"
                />
                <TextFieldGroup
                  placeholder="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Descripton of the reward"
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
      </div>
    );
  }
}

EditJobModal.propTypes = {
  editJob: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  getSelectedJob: PropTypes.func.isRequired
  // getCurrentProfile: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job
  // errors: state.errors
});

export default connect(
  mapStateToProps,
  { editJob, getSelectedJob }
)(withRouter(EditJobModal));

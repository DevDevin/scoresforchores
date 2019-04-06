import React, { Component } from "react";
import SelectListGroup from "../common/SelectListGroup";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      jobName: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const errors = this.state.errors;

    // Select options for status
    const jobs = [
      { label: "Select a job:", value: 0 },
      { label: "Job 1", value: "Job 1" },
      { label: "Job 2", value: "Job 2" },
      { label: "Job 3", value: "Job 3" },
      { label: "Job 4", value: "Job 4" },
      { label: "Job 5", value: "Job 5" }
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
            <p>Hello</p>
            <div>
              <form onSubmit={this.onSubmit}>
                <SelectListGroup
                  placeholder="Job"
                  name="jobName"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors}
                  options={jobs}
                  info="Give us an idea of where you are in your career"
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
  getJobsByName: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(AssignJobsModal));

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { submitCompletionRequest } from "../../../actions/childActions";

// TODO: only Brinlee can add a job. Need to see why.

class CompletionRequestModal extends Component {
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
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log("this.props.dayofjobid: ", this.props.dayOfJobID);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onSubmit() {
    // call the parent action that changes the status of the dayofjob to submitted

    //call the edit job function

    this.props.submitCompletionRequest(
      this.props.dayOfJobID,
      this.props.history
    );
    // toggle off
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
          Add Job
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Completion Request</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to submit your job as completed?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>
              Sumbit
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

CompletionRequestModal.propTypes = {
  submitCompletionRequest: PropTypes.func.isRequired,
  addJob: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //
});

export default connect(
  mapStateToProps,
  { submitCompletionRequest }
)(withRouter(CompletionRequestModal));

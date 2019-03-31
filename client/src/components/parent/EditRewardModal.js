import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditReward from "./EditReward";
import { editReward, getSelectedReward } from "../../actions/parentActions";
import isEmpty from "../../validation/is-empty";

class EditRewardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewardID: "",
      modal: false,
      rewardName: "",
      points: 0,
      description: "",
      errors: {}
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps: ", nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.reward.reward) {
      const changedReward = nextProps.reward.reward;

      // if reward field does not exist, make empty string
      changedReward.rewardName = !isEmpty(changedReward.rewardName)
        ? changedReward.rewardName
        : "";
      changedReward.description = !isEmpty(changedReward.description)
        ? changedReward.description
        : "";
      changedReward._id = !isEmpty(changedReward._id) ? changedReward._id : "";

      // // Set component fields state
      // this.setState({
      //   rewardName: changedReward.rewardName,
      //   points: changedReward.points.toString(),
      //   description: changedReward._id,
      //   rewardID: changedReward._id.toString()
      //   //rewardID: "5c9ad1c363511665b8472a82"
      // });
    }
  }

  toggle() {
    // get data back for the selected rewarded
    this.props.getSelectedReward(this.props.rewardID);
    console.log("this.props.reward.reward._id: ", this.props.reward.reward._id);

    //Set the state so the original values appear when modal first opens
    // Set component fields state
    this.setState({
      rewardName: this.props.reward.reward.rewardName,
      points: this.props.reward.reward.points,
      description: this.props.reward.reward.description
    });

    // create newReward object to submit to addReward function
    // need to set the newReward values to props. But first I need to pass in propss
    const newReward = {
      rewardName: this.state.rewardName,
      points: this.state.points,
      description: this.state.description,
      rewardID: this.props.rewardID
    };
    const reward = this.props.reward.reward;

    //call the edit reward function
    this.props.editReward(newReward, this.props.history);

    // console.log("toggle clicked");
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
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <p>{this.props.rewardID}</p>
            <div>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Reward Name"
                  name="rewardName"
                  value={this.state.rewardName}
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

EditRewardModal.propTypes = {
  editReward: PropTypes.func.isRequired,
  reward: PropTypes.object.isRequired,
  getSelectedReward: PropTypes.func.isRequired
  // getCurrentProfile: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reward: state.reward
  // errors: state.errors
});

export default connect(
  mapStateToProps,
  { editReward, getSelectedReward }
)(withRouter(EditRewardModal));

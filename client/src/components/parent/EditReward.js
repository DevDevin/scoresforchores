import React, { Component } from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import classnames from "classnames";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addReward, getSelectedReward } from "../../actions/parentActions";
import isEmpty from "../../validation/is-empty";

class EditReward extends Component {
  // constructor to set the state
  constructor() {
    super();
    this.state = {
      rewardName: "reward Name goes here",
      points: 0,
      description: "description of selected reward",
      errors: {}
    };

    // bind the functions before using them
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps.reward.reward.description);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.reward.reward) {
      const reward = nextProps.reward.reward;

      // if reward field does not exist, make empty string
      reward.rewardName = !isEmpty(reward.rewardName) ? reward.rewardName : "";
      reward.description = !isEmpty(reward.description)
        ? reward.description
        : "";

      // Set component fields state
      this.setState({
        rewardName: reward.rewardName,
        points: reward.points,
        description: reward.description
      });
    }
  }

  componentDidMount() {
    const test = this.props.getSelectedReward(this.props.rewardID);
    console.log("reward ID = ", this.props.rewardID);
  }

  // onSubmit function
  onSubmit(e) {
    e.preventDefault();
    const rewardData = {
      rewardName: this.state.rewardName,
      points: this.state.points,
      description: this.state.description
    };

    this.props.addReward(rewardData, this.props.history);
  }

  // onChange function
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { reward } = this.props.reward;
    const errors = this.state.errors;

    return (
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
    );
  }
}

EditReward.propTypes = {
  getSelectedReward: PropTypes.func.isRequired,
  reward: PropTypes.object.isRequired
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
  { getSelectedReward }
)(withRouter(EditReward));

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
      rewardName: "selected reward's reward name",
      points: 0,
      description: "description of selected reward",
      errors: {}
    };

    // bind the functions before using them
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const reward = nextProps.reward;

      // if profile field does not exist, make empty string
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
    this.props.getSelectedReward();
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
    const errors = this.state.errors;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Profile Handle"
            name="handle"
            value={this.state.rewardName}
            onChange={this.onChange}
            error={errors.handle}
            info="A unique handle for your profile URL. Your full name, company name, nickname"
          />
          <TextFieldGroup
            placeholder="Company"
            name="company"
            value={this.state.points}
            onChange={this.onChange}
            error={errors.company}
            info="Could be your own company or one you work for"
          />
          <TextFieldGroup
            placeholder="Company"
            name="company"
            value={this.state.description}
            onChange={this.onChange}
            error={errors.company}
            info="Could be your own company or one you work for"
          />
        </form>
      </div>
    );
  }
}

EditReward.propTypes = {
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
  { getSelectedReward }
)(withRouter(EditReward));

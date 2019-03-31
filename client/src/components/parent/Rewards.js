import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getRewards, deleteReward } from "../../actions/parentActions";
import EditRewardModal from "../parent/EditRewardModal";

class Rewards extends Component {
  componentDidMount() {
    this.props.getRewards();
  }

  onDeleteClick(id) {
    this.props.deleteReward(id);
    this.props.history.push("/rewards");
  }

  render() {
    const { rewards, loading } = this.props.reward;
    console.log(rewards);
    let rewardItems;

    if (rewards === null || loading) {
      rewardItems = <Spinner />;
    } else {
      if (rewards.length > 0) {
        rewardItems = rewards.map(reward => (
          <tbody>
            <tr>
              <td key={reward._id}>{reward.rewardName}</td>
              <td key={reward._id}>{reward.description}</td>
              <td key={reward._id}>{reward.points}</td>
              <td key={reward._id}>
                <EditRewardModal rewardID={reward._id} />
              </td>
              <td key={reward._id}>
                <button
                  onClick={this.onDeleteClick.bind(this, reward._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ));
      } else {
        rewardItems = <h4>No rewards found...</h4>;
      }
    }

    return (
      <div className="rewards">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Rewards</h1>
              <p className="lead text-center">Manage rewards here.</p>
              <Table borderless>
                <thead>
                  <tr>
                    <th>Reward</th>
                    <th>Description</th>
                    <th>Points</th>
                  </tr>
                </thead>
                {rewardItems}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Rewards.propTypes = {
  getRewards: PropTypes.func.isRequired,
  deleteReward: PropTypes.func.isRequired,
  reward: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  reward: state.rewards
});

export default connect(
  mapStateToProps,
  { getRewards, deleteReward }
)(Rewards);

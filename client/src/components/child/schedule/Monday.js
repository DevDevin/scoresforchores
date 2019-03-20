import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TabPane, Row, Col } from "reactstrap";
import { getMyChores } from "../../../actions/childActions";

class Monday extends Component {
  componentDidMount() {
    this.props.getMyChores();
  }
  render() {
    return (
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <h4>Monday Chores</h4>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

Monday.propTypes = {
  getMyChores: PropTypes.func.isRequired,
  chores: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chores: state.chores
});

export default connect(
  mapStateToProps,
  { getMyChores }
)(Monday);

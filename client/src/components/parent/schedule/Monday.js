import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  TabPane,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { getMyChores } from "../../../actions/childActions";
import AssignJobsModal from "../AssignJobsModal";

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
        <AssignJobsModal />
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

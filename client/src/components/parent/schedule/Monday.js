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
import JobsByName from "./JobsByName";
// TODO: MAYBE INSTEAD OF TRYING TO BE FANCY I CAN JUST BRING IN ALL THE JOBS TO EACH DAY AND THEN MAP AND SORT BY THE DAY. OR MAYBE I DON'T HAVE TO BECAUSE CHORES IS ALREADY GLOBAL FOR THAT WHOLE THING.
class Monday extends Component {
  componentDidMount() {
    this.props.getMyChores();
  }

  render() {
    console.log("this.props.chores from Monday.js: ", this.props.chores);
    return (
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <h4>Monday Chores</h4>
            <JobsByName />
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

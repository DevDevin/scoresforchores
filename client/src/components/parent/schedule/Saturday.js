import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import AssignJobsModal from "../AssignJobsModal";

class Saturday extends Component {
  render() {
    return (
      <TabPane tabId="6">
        <Row>
          <Col sm="12">
            <h4>Saturday Chores</h4>
          </Col>
        </Row>
        <AssignJobsModal />
      </TabPane>
    );
  }
}

export default Saturday;

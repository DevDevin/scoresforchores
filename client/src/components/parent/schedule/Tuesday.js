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

class Tuesday extends Component {
  render() {
    return (
      <TabPane tabId="2">
        <Row>
          <Col sm="12">
            <h4>Tuesday Chores</h4>
          </Col>
        </Row>
        <AssignJobsModal />
      </TabPane>
    );
  }
}

export default Tuesday;
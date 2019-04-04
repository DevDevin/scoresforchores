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

class Wednesday extends Component {
  render() {
    return (
      <TabPane tabId="3">
        <Row>
          <Col sm="12">
            <h4>Wednesday Chores</h4>
          </Col>
        </Row>
        <AssignJobsModal />
      </TabPane>
    );
  }
}

export default Wednesday;

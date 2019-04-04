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

class Friday extends Component {
  render() {
    return (
      <TabPane tabId="5">
        <Row>
          <Col sm="12">
            <h4>Friday Chores</h4>
          </Col>
        </Row>
        <AssignJobsModal />
      </TabPane>
    );
  }
}

export default Friday;

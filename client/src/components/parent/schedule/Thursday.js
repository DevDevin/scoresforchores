import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import AssignJobsModal from "../AssignJobsModal";

class Thursday extends Component {
  render() {
    return (
      <TabPane tabId="4">
        <Row>
          <Col sm="12">
            <h4>Thursday Chores</h4>
          </Col>
        </Row>
        <AssignJobsModal />
      </TabPane>
    );
  }
}

export default Thursday;

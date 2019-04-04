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

class Tuesday extends Component {
  render() {
    return (
      <TabPane tabId="2">
        <Row>
          <Col sm="12">
            <h4>Tuesday Chores</h4>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default Tuesday;

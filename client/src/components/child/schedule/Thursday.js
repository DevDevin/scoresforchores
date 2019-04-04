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

class Thursday extends Component {
  render() {
    return (
      <TabPane tabId="4">
        <Row>
          <Col sm="12">
            <h4>Thursday Chores</h4>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default Thursday;

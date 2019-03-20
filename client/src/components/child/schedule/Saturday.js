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
  Col
} from "reactstrap";

class Saturday extends Component {
  render() {
    return (
      <TabPane tabId="6">
        <Row>
          <Col sm="12">
            <h4>Saturday Chores</h4>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default Saturday;

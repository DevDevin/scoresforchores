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

class Wednesday extends Component {
  render() {
    return (
      <TabPane tabId="3">
        <Row>
          <Col sm="12">
            <h4>Wednesday Chores</h4>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default Wednesday;

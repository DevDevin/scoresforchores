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

class Friday extends Component {
  render() {
    return (
      <TabPane tabId="5">
        <Row>
          <Col sm="12">
            <h4>Friday Chores</h4>
          </Col>
        </Row>
      </TabPane>
    );
  }
}

export default Friday;

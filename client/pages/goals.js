import { useState } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// React Bootstrap List Group
export default function Goals() {
  const [goals, setGoals] = useState([
    "Strength train 3x week",
    "Cardio 2x week",
    "Yoga 5x week",
    "Swim 2x week",
  ]);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            {goals.map((goal, index) => (
              <ListGroup.Item action href="#link1" key={index}>
                {goal}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">1</Tab.Pane>
            <Tab.Pane eventKey="#link2">2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

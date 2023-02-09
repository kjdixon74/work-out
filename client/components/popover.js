import styles from "../styles/Demo.module.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Link from "next/link";
import Progress from "./progress";
import { useState } from "react";

export default function PopoverGoals() {
  // React Bootstrap Popover (used React Bootstrap instead of Bootstrap to avoid manipulating the DOM)
  const [goals, setGoals] = useState([
    "Strength train 3x week",
    "Cardio 2x week",
    "Yoga 5x week",
    "Swim 2x week",
  ]);

  return (
    <div className={styles.popover}>
      <Progress />
      <OverlayTrigger
        trigger="focus"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <Popover.Header as="h3">💪 Current Goals</Popover.Header>
            <Popover.Body>
              <ul>
                {goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>

              <Link href="/goals">View details/make changes here.</Link>
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary">Goals Reached</Button>
      </OverlayTrigger>
    </div>
  );
}

// Lesson learned - nested progress with popover (instead of importing separately in demo) to make progress the same width as popover; then added margin-bottom to progress

// TODOs: change goals to logged in user's goals

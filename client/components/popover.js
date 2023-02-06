import styles from "../styles/Demo.module.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function PopoverGoals() {
  // React Bootstrap Popover
  return (
    <OverlayTrigger
      trigger="click"
      key="top"
      placement="top"
      overlay={
        <Popover id="popover-positioned-top">
          <Popover.Header as="h3">💪 Current Goals</Popover.Header>
          <Popover.Body>
            <strong>Strength train 3x week!</strong>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary" className={styles.popover}>
        Goals Reached
      </Button>
    </OverlayTrigger>
  );
}

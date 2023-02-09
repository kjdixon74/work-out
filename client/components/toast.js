import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useState } from "react";

// React Bootstrap Toast (used React Bootstrap instead of Bootstrap to avoid manipulating the DOM)
export default function ToastEl() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast show={show1} onClose={() => setShow1(false)} bg="warning">
        <Toast.Header>
          <strong className="me-auto">
            Hello! A few things to get started...
          </strong>
        </Toast.Header>
        <Toast.Body>
          To log a workout, click on a date or the Log Workout button.
        </Toast.Body>
      </Toast>
      <Toast show={show2} onClose={() => setShow2(false)} bg="warning">
        <Toast.Header>
          <strong className="me-auto">
            The bar will track your progress...
          </strong>
        </Toast.Header>
        <Toast.Body>
          But to see your fitness goals being tracked, click on the Goals
          Reached button.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

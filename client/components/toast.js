import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useState } from "react";

// React Bootstrap Toast (used React Bootstrap instead of Bootstrap to avoid manipulating the DOM)
export default function ToastEl() {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast show={show} onClose={() => setShow(false)} bg="warning">
        <Toast.Header>
          <strong className="me-auto">Hello!</strong>
        </Toast.Header>
        <Toast.Body>Click on a date or the button to log a workout.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

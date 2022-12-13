import { useState } from "react";

// Bootstrap Form with change event and submission
function LoginForm() {
  // React state variable to store email and password for validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  function validate(password) {
    if (!/[A-Za-z]/.test(password)) {
      console.log("Password must contain at least one letter.");
    }

    if (!/[0-9]/.test(password)) {
      console.log("Password must contain at least one number.");
    }

    if (!/^[A-Za-z0-9]*$/.test(password)) {
      console.log("Password must only contain letters and numbers.");
    }
  }

  function handleChange(event) {
    const userInput = event.target.value;
    const inputField = event.target.name;

    if (inputField === "email") {
      setEmail(userInput);
      setDisableSubmit(false);
    } else if (inputField === "password") {
      validate(userInput);
      setPassword(userInput);
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }

  return (
    <form className="login-form">
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          name="email"
          required
          value={email}
          onChange={(event) => handleChange(event)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          aria-describedby="passwordHelpBlock"
          name="password"
          required
          minLength="8"
          maxLength="20"
          value={password}
          onChange={(event) => handleChange(event)}
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces or special characters.
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        disabled={disableSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;

// Lesson learned - changed the for prop to htmlFor because for is a reserved word in JavaScript

// Come back to password validation and error messages
// Left off here - want to change to only set variables and validate once hit button

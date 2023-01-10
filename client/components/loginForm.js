import { useState } from "react";
import styles from "../styles/Login.module.css";

// Bootstrap Form with client-side (built-in and Constraint Validation API) and regex validation
function LoginForm() {
  // React state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function runTimer() {
    setTimeout(() => setError(""), 4000);
  }

  function validatePassword() {
    if (!/[A-Za-z]/.test(password)) {
      setError("Your password must contain at least one letter.");
      runTimer();
      return false;
    } else if (!/[0-9]/.test(password)) {
      setError("Your password must contain at least one number.");
      runTimer();
      return false;
    } else if (!/^[A-Za-z0-9]*$/.test(password)) {
      setError("Your password must only contain letters and numbers.");
      runTimer();
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function submitForm(event) {
    if (!event.target.reportValidity()) {
      // reportValidity reports invalid fields
      event.preventDefault();
    } else if (!validatePassword()) {
      event.preventDefault();
    }
  }

  // noValidate turns off the browser's automatic validation and allows our script to take control over validation
  return (
    <form
      className="login-form"
      noValidate
      onSubmit={(event) => submitForm(event)}
    >
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          required
          onInput={(event) => setEmail(event.target.value)}
          name="email"
          value={email}
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
          required
          minLength="8"
          maxLength="20"
          onInput={(event) => setPassword(event.target.value)}
          name="password"
          value={password}
        />
        {error ? (
          <span className={styles.error} aria-live="polite">
            {error}
          </span>
        ) : null}
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces or special characters.
        </div>
      </div>
      <button type="submit" className="btn btn-outline-secondary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;

// Lesson learned - changed the for prop to htmlFor because for is a reserved word in JavaScript

// Come back to after Express - sending form data

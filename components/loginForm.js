// Bootstrap Form
function LoginForm() {
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
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
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
// left off here - setting up firebase, want to implement create an account, sign in, and sign in with google

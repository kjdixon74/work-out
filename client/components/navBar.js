import Link from "next/link";
import { useRouter } from "next/router";

// Bootstrap NavBar w/ fixed top & scrolling toggler
export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Workout Wellness
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/demo" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="/demo"
              >
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/createAccount"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                href="/createAccount"
              >
                Create Account
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/login" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/favorite"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/favorite"
              >
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/logout" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="/logout"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// TODOs: toggle between login and logout status

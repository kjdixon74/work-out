import Link from "next/link";
import { useRouter } from "next/router";

// Bootstrap NavBar
export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient fixed-top">
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
          <ul className="navbar-nav">
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
                  router.pathname === "/logout" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="/logout"
              >
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/exercises"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                href="/exercises"
              >
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/workouts"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                href="/workouts"
              >
                Workouts
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
                  router.pathname === "/sweat" ? "nav-link active" : "nav-link"
                }
                href="/sweat"
              >
                Ready to Sweat?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  router.pathname === "/history"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/history"
              >
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

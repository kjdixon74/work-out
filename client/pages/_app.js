import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { UserContext } from "../components/context";
import NavBar from "../components/navBar";

function MyApp({ Component, pageProps }) {
  // Import bundled Bootstrap JavaScript after fully rendered; because of Next.js' server-side rendering, document object is not ready until the page is fully loaded
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <UserContext>
      <NavBar />
      <Component {...pageProps} />
    </UserContext>
  );
}

export default MyApp;

// 1) Implement Next.js for its routing
// 2) Bootstrap NavBar
// 3) Next.js linking & routing among NavBar
// 4) Share user context among NavBar and components
// 5) Home component -> Demo, Create Account, & Login
// 6) Once logged in -> "Home/Calendar", Goals, Favorites, & Logout

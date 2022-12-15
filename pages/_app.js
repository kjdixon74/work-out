import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { UserContext } from "../components/context";
import NavBar from "../components/navBar";

function MyApp({ Component, pageProps }) {
  // Import bundled Bootstrap JavaScript after fully rendered; because of Next.js' server-side rendering, document object is not ready until the page is fully loaded
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserContext>
      <NavBar />
      <Component {...pageProps} />
    </UserContext>
  );
}

export default MyApp;

// 1) Implemented Next.js for its routing
// 2) Bootstrap NavBar
// 3) NavBar routing among pages
// 4) Share user context among pages
// 5) Login/logout components

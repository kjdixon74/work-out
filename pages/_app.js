import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../components/context";
import NavBar from "../components/navBar";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <NavBar />
      <Component {...pageProps} />
    </UserContext>
  );
}

export default MyApp;

// Implemented Next.js for its routing

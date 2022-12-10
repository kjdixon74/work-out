import { useAppContext } from "../components/context";
import LoginForm from "../components/loginForm";
import styles from "../styles/Login.module.css";

export default function Login() {
  const users = useAppContext();
  console.log("Users:", users);

  return <main className={styles.main}>{LoginForm()}</main>;
}

import { useAppContext } from "../components/context";
import LoginForm from "../components/loginForm";

export default function Login() {
  const users = useAppContext();
  console.log(users);

  return <main>{LoginForm()}</main>;
}

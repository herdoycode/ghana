import { getServerSession } from "next-auth";
import LoginForm from "./LoginForm";
import "./page.scss";
import authOptions from "../api/auth/authOptions";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/admin");

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

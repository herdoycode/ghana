import LoginForm from "./LoginForm";
import "./page.scss";

const LoginPage = () => {
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

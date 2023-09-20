import { LoginForm } from "../../components/LoginForm/LoginForm";
import CARTOLA from "../../assets/CARTOLA-removebg-preview.png";
import { StyledLoginPage } from "./styledLoginPage";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <StyledLoginPage>
      <div className="login-page__container">
        <div className="login-page__image">
          <img src={CARTOLA} alt="A cartola do logo" />
        </div>
        <div className="login-page__form-container">
          <h1 className="login-page__title">Login</h1>
          <LoginForm />
          <div className="login-page__redirect">
            <p>Ainda não possui conta?</p>
            <button onClick={() => navigate("/register")}>CADASTRE-SE</button>
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};

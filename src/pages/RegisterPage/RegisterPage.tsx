import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import CARTOLA from "../../assets/CARTOLA-removebg-preview.png";
import { StyledRegisterPage } from "./styledRegisterPage";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div className="register-page__container">
        <div className="register-page__image">
          <img src={CARTOLA} alt="A cartola do logo" />
        </div>
        <div className="register-page__form-container">
          <div className="register-page__form-header">
            <h1 className="register-page__title">Cadastro</h1>
            <Link className="register-page__redirect" to="/login">
              ir para o login
            </Link>
          </div>
          <RegisterForm />
        </div>
      </div>
    </StyledRegisterPage>
  );
};

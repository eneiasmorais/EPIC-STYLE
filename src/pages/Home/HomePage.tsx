import { Link } from "react-router-dom";
import LogoNoBackground from "../../assets/CARTOLA-removebg-preview.png";
import { StyledHomePage } from "./styledHomePage";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="logo__container">
        <img src={LogoNoBackground} alt="Logo da página" />
        <span>Epic Style</span>
        <span className="subtitle">ONDE O ESTILO ENCONTRA A GANDREZA</span>
      </div>
      <div className="links__container">
        <Link to="/dashboard">Conheça nosso site</Link>
        <span>ou</span>
        <Link to="/register">Crie uma conta</Link>
      </div>
    </StyledHomePage>
  );
};

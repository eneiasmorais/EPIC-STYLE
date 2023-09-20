import { Link } from "react-router-dom";
import ErrorIcon from "../../assets/error-icon.svg";
import { StyledNotFoundDiv } from "./styledNotFoundPage";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundDiv>
      <div className="left__container">
        <span>Oooooops!</span>
        <span className="error__info">
          Não encontramos a página que você procurou, vamos tentar novamente
        </span>
        <Link to="/">Ir para a home page</Link>
      </div>
      <div className="right__container">
        <img src={ErrorIcon} alt="Error" />
      </div>
    </StyledNotFoundDiv>
  );
};

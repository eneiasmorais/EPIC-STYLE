import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { ProductsContext } from "../../providers/ProductsContext";
import { UserContext } from "../../providers/UserContext";
import UserProfileIcon from "../../assets/header/png/user.png";
import CartIcon from "../../assets/header/png/cart.png";
import WishListIcon from "../../assets/header/png/wishes.png";
import SignInIcon from "../../assets/header/png/enter.png";
import { StyledHeaderNew } from "./styledHeader";

export const Header = () => {
  const { setCartModal, setWishListModal } = useContext(CartContext);
  const { redirectToLogin } = useContext(ProductsContext);
  const { userLogout, setPatchModal, user } = useContext(UserContext);

  return (
    <>
      {!user ? (
        <StyledHeaderNew>
          <div className="width__container">
            <div className="header-left__container">
              <h1>EPIC STYLE</h1>
            </div>
            <div className="header--right__container">
              <button onClick={() => setCartModal(true)} className="header--button__cart">
                <img src={CartIcon} alt="Carrinho de compras" />
              </button>
              <button onClick={() => setWishListModal(true)} className="header--button__wishes">
                <img src={WishListIcon} alt="Lista de desejos" />
              </button>
              <button className="header--button__login" onClick={() => redirectToLogin()}>
                Entrar
                <img className="header--button__signIn" src={SignInIcon} alt="Entrar" />
              </button>
            </div>
          </div>
        </StyledHeaderNew>
      ) : (
        <StyledHeaderNew>
          <div className="width__container">
            <div className="header-left__container">
              <h1>EPIC STYLE</h1>
            </div>
            <div className="header--right__container">
              <button onClick={() => setPatchModal(true)} className="header--button__userProfile">
                <img src={UserProfileIcon} alt="Perfil do usuário" />
              </button>
              <button onClick={() => setCartModal(true)} className="header--button__cart">
                <img src={CartIcon} alt="Carrinho de compras" />
              </button>
              <button onClick={() => setWishListModal(true)} className="header--button__wishes">
                <img src={WishListIcon} alt="Lista de desejos" />
              </button>
              <button className="header--button__leave" onClick={() => userLogout()}>
                Sair
                <img src={SignInIcon} alt="Sair" />
              </button>
            </div>
          </div>
        </StyledHeaderNew>
      )}
    </>
  );
};

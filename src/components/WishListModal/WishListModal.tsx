import { useContext } from "react";
import { StyledWishListModal } from "./styledWishList";
import { CartContext } from "../../providers/CartContext";
import HeartIcon from "../../assets/broken-heart.svg";
import AddCart from "../../assets/plus-cart.svg";

export const WishListModal = () => {
  const {
    setWishListModal,
    wishListProducts,
    removeItemFromWishList,
    handleAddItemToCart,
  } = useContext(CartContext);

  return (
    <StyledWishListModal>
      <div className="wishList__container">
        <header>
          <h3>Lista de favoritos</h3>
          <button
            className="close__wishList"
            onClick={() => setWishListModal(false)}
          >
            &#10005;
          </button>
        </header>

        {wishListProducts.length <= 0 ? (
          <div className="emptyWishList__container">
            <p>Sua lista de favoritos está vazia</p>
            <span>Adicione itens</span>
          </div>
        ) : (
          <div className="wishList__container">
            <ul>
              {wishListProducts.map((item) => {
                return (
                  <li key={item.id}>
                    <img className="product__image" src={item.img} alt="" />
                    <div className="itemInfo__container">
                      <span className="item__name">
                        {item.name.substring(0, 15)}...
                      </span>
                      <span className="item__category">
                        {item.category.toUpperCase()}
                      </span>
                      <span className="item__price">R$ {item.price}</span>
                    </div>
                    <div className="btns__container">
                      <img
                        onClick={() => removeItemFromWishList(item.id)}
                        src={HeartIcon}
                        alt=""
                      />
                      <img
                        onClick={() => handleAddItemToCart(item.id)}
                        src={AddCart}
                        alt=""
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </StyledWishListModal>
  );
};

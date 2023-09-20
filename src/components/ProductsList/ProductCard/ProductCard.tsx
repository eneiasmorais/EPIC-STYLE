import { useContext } from "react";
import { IProductCardProps } from "../../../Interfaces/Interfaces";
import { StyledProductcard } from "./styles";
import { CartContext } from "../../../providers/CartContext";
import LikeHeart from "../../../assets/header/png/wishes.png";

export const ProductCard = ({ product }: IProductCardProps) => {
  const { handleAddItemToCart, handleAddItemToWishList } =
    useContext(CartContext);

  return (
    <StyledProductcard>
      <div className="product__divImg__card">
        <img
          className="product__img__card"
          src={product.img}
          alt={product.name}
        />
        <img
          onClick={() => handleAddItemToWishList(product.id)}
          className="product__imgLike__card"
          src={LikeHeart}
          alt="like"
        />
      </div>
      <div className="product__divInfo__card">
        <h2 className="product__name__card">{product.name.toUpperCase()}</h2>
        <div className="product__divCategoryPrice__card">
          <h4 className="product__category__card">
            {product.category.toUpperCase()}
          </h4>
          <span className="product__price__card">R$ {product.price}</span>
        </div>
        <button
          onClick={() => handleAddItemToCart(product.id)}
          className="product__button__addToCart"
        >
          ADICIONE AO CARRINHO
        </button>
      </div>
    </StyledProductcard>
  );
};

import { useContext } from "react";
import { StyledCartTotal } from "./styledCartTotal";
import { CartContext } from "../../../providers/CartContext";
import { UserContext } from "../../../providers/UserContext";
import { toast } from "react-toastify";

export const CartTotal = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const cartTotalValue = cartProducts.reduce((acc, item) => {
    if (item.finalPrice) {
      return acc + item.finalPrice;
    }
    return acc + item.price;
  }, 0);

  const removeAllCartItems = () => {
    setCartProducts([]);
  };

  return (
    <StyledCartTotal>
      <div className="cartPrice__container">
        <div className="total__header">
          <span>Total:</span>
          <span className="finalPrice">R${cartTotalValue.toFixed(2)}</span>
        </div>
        <div className="btns__container">
          <button
            onClick={
              user
                ? () => toast.error("Essa função ainda não está disponível")
                : () =>
                    toast.error(
                      "Você deve estar logado para utilizar essa função"
                    )
            }
            className="finish"
          >
            FINALIZAR COMPRA
          </button>
          <button onClick={() => removeAllCartItems()} className="remove">
            LIMPAR CARRINHO
          </button>
        </div>
      </div>
    </StyledCartTotal>
  );
};

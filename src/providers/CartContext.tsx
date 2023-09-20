import { createContext, useContext, useState } from "react";
import {
  ICartContext,
  ICartProducts,
  ICartProviderProps,
  IProduct,
} from "../Interfaces/Interfaces";
import { ProductsContext } from "../providers/ProductsContext";
import { toast } from "react-toastify";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const { products } = useContext(ProductsContext);
  const [cartModal, setCartModal] = useState(false);
  const [cartProducts, setCartProducts] = useState<ICartProducts[]>([]);
  const [wishListModal, setWishListModal] = useState(false);
  const [wishListProducts, setWishListProducts] = useState<IProduct[]>([]);

  const handleAddItemToCart = (id: number) => {
    const productExists = cartProducts.find((item) => item.id === id);

    if (productExists) {
      const foundProducts = cartProducts.map((product) => {
        if (productExists.id === product.id) {
          product.quantity = product.quantity + 1;
          product.finalPrice = product.price * product.quantity;
        }

        return product;
      });
      setCartProducts(foundProducts);
    } else {
      const foundProduct = products.find((product) => product.id === id);

      const productWithQuantity = {
        ...foundProduct,
        quantity: 1,
        finalPrice: 0,
      };

      setCartProducts([...cartProducts, productWithQuantity] as ICartProducts[]);
      toast.success("Item adicionado ao carrinho");
    }
  };

  const handleAddItemToWishList = (id: number) => {
    const productExists = wishListProducts.find((item) => item.id === id);

    if (productExists) {
      toast.error("O item já foi adicionado a lista de favoritos!");
    } else {
      const foundProduct = products.find((product) => product.id === id);
      setWishListProducts([...wishListProducts, foundProduct] as IProduct[]);
      toast.success("Item adicionado aos favoritos!");
    }
  };

  const removeItemFromCart = (id: number) => {
    const newList = cartProducts.filter((item) => item.id !== id);
    setCartProducts(newList);
  };

  const removeItemFromWishList = (id: number) => {
    const newList = wishListProducts.filter((item) => item.id !== id);
    setWishListProducts(newList);
  };

  const addItemQuantity = (id: number) => {
    if (cartProducts.length > 0) {
      const foundItem = cartProducts.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1;
        foundItem.finalPrice = foundItem.price * foundItem.quantity;
      }

      setCartProducts([...cartProducts]);
    }

    return cartProducts;
  };

  const removeItemQuantity = (id: number) => {
    if (cartProducts.length > 0) {
      const foundItem = cartProducts.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity = foundItem.quantity - 1;
        foundItem.finalPrice = foundItem.price * foundItem.quantity;
      }

      setCartProducts([...cartProducts]);

      if (foundItem?.quantity === 0) {
        removeItemFromCart(foundItem.id);
      }
    }

    return cartProducts;
  };

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        cartProducts,
        setCartProducts,
        handleAddItemToCart,
        removeItemFromCart,
        addItemQuantity,
        removeItemQuantity,
        wishListModal,
        setWishListModal,
        wishListProducts,
        setWishListProducts,
        handleAddItemToWishList,
        removeItemFromWishList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

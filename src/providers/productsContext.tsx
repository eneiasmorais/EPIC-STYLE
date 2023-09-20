import { createContext, useEffect, useState } from "react";
import {
  IProduct,
  IProductsContext,
  IProductsProviderProps,
} from "../Interfaces/Interfaces";
import { api } from "../services/api";

export const ProductsContext = createContext({} as IProductsContext);

export const AuthProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<string>("todos");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("products");
        setProducts(
          response.data.map((product: { category: string }) => ({
            ...product,
            category: product.category.toLowerCase(),
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const filterCategories = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const redirectToLogin = () => {
    window.location.replace("/login");
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        category,
        setCategory,
        filterCategories,
        redirectToLogin,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

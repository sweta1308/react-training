import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/ProductReducer";
import { filterProducts, getProducts } from "../utils";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    loading: false,
    products: [],
    filters: {
      search: "",
      sort: "",
    },
  });

  useEffect(() => {
    getProducts(productDispatch);
  }, []);

  let filteredProducts = filterProducts(
    productState?.products,
    productState?.filters
  );

  const value = { productState, productDispatch, filteredProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

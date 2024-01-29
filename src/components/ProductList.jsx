import React, { useMemo } from "react";
import { useProduct } from "../context/ProductContext";
import { Filters } from "./Filters";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { productState, filteredProducts } = useProduct();
  const totalPrice = useMemo(
    () => filteredProducts?.reduce((acc, product) => (acc += product.price), 0),
    [filteredProducts]
  );
  return (
    <>
      <Filters />
      <h2>Total Price: ${totalPrice}</h2>
      <div className="product-list">
        {productState?.loading ? (
          <h1>Loading...</h1>
        ) : filteredProducts?.length === 0 ? (
          <h1>No products found.</h1>
        ) : (
          filteredProducts?.map((product) => <ProductCard product={product} />)
        )}
      </div>
    </>
  );
};

export const filterProducts = (products, filters) => {
  let filteredProduct = products;

  filteredProduct = filteredProduct?.filter((product) =>
    product?.title
      .trim()
      .toLowerCase()
      .includes(filters.search.trim().toLowerCase())
  );

  filteredProduct =
    filters.sort === "HTL"
      ? filteredProduct.sort((a, b) => b.price - a.price)
      : filters.sort === "LTH"
      ? filteredProduct.sort((a, b) => a.price - b.price)
      : filteredProduct;

  return filteredProduct;
};

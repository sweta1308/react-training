export const getProducts = async (productDispatch) => {
  try {
    productDispatch({ type: "SET_LOADING", payload: true });
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data?.products;
    productDispatch({ type: "SET_PRODUCTS", payload: products });
  } catch (e) {
    console.log(e);
  } finally {
    productDispatch({ type: "SET_LOADING", payload: false });
  }
};

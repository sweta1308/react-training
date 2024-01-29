export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload };
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    case "SEARCH_FILTER":
      return { ...state, filters: { ...state.filters, search: payload } };
    case "SORT_FILTER":
      return { ...state, filters: { ...state.filters, sort: payload } };
    default:
      return state;
  }
};

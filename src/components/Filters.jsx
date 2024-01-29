import { useProduct } from "../context/ProductContext";

export const Filters = () => {
  const { productState, productDispatch } = useProduct();
  return (
    <div className="filters">
      <input
        className="product-input"
        placeholder="Search by title..."
        value={productState?.filters?.search}
        onChange={(e) =>
          productDispatch({ type: "SEARCH_FILTER", payload: e.target.value })
        }
      />
      <select
        className="product-sort"
        value={productState?.filters.sort}
        onChange={(e) =>
          productDispatch({ type: "SORT_FILTER", payload: e.target.value })
        }
      >
        <option value="">Sort by</option>
        <option value="LTH">Price: Low to High</option>
        <option value="HTL">Price: High to Low</option>
      </select>
    </div>
  );
};

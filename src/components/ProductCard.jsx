export const ProductCard = ({ product }) => {
  return (
    <div key={product?.id} className="product">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <h3>
        {product.title.length > 15
          ? product.title.substring(0, 15) + "..."
          : product.title}
      </h3>
      <p>${product.price}</p>
    </div>
  );
};

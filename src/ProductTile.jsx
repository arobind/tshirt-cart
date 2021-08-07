import "./ProductTile.css";

export default function ProductTile({
  productPrice = "0.00",
  productName,
  updateCartList,
  id
}) {
  const [integral, fractional] = productPrice.split(".");
  function addToCartHandler(e) {
    updateCartList(id);
  }
  return (
    <div className="product-tile" onClick={addToCartHandler}>
      <div className="product-tile-image">
        <img src="https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
      </div>
      <div className="product-tile-info">
        <div className="product-tile-name">{productName}</div>
        <hr />
        <div className="product-tile-price">
          $.<span className="product-tile-price-em">{integral}</span>.
          {fractional}
        </div>
        <button className="product-tile-button">Add to cart</button>
      </div>
    </div>
  );
}

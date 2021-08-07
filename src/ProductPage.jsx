import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductTile from "./ProductTile";
import SortBar from "./SortBar";
import Size from "./SizeList";
import Cart from "./Cart";
import tshirtDummyList from "./assets/DummyList";

export default function ProductPage() {
  const [tshirtList, setTshirtList] = useState(tshirtDummyList);
  const [cartList, setCartList] = useState([]);

  function updateCartList(id) {
    let newCartList = [...cartList];
    newCartList.push(id);
    setCartList(newCartList);
  }

  function filterListBySize(sizeArr) {
    let newList = [];
    if (sizeArr.length === 0) newList = [...tshirtDummyList];
    else {
      for (let ele of tshirtDummyList) {
        sizeArr.filter((size) => ele.sizes.includes(size)).length > 0 &&
          newList.push(ele);
      }
    }
    setTshirtList(newList);
  }

  function sortList(type) {
    let prev = [...tshirtList];
    prev =
      type === "1"
        ? prev.sort((a, b) => {
            return +a.price - +b.price;
          })
        : prev.sort((a, b) => {
            return +b.price - +a.price;
          });
    setTshirtList(prev);
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <Cart cartList={cartList} />
        <SortBar sortList={sortList} />
      </div>
      <h2>
        <span className="product-count">{`${tshirtList.length} Products found`}</span>
      </h2>
      <div className="product-page">
        <Size className="size-list" filterListBySize={filterListBySize} />
        <div className="products-display">
          {tshirtList.map((item) => {
            return (
              <ProductTile
                productName={item.desc}
                productPrice={item.price}
                updateCartList={updateCartList}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

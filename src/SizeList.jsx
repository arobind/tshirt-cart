import { useState } from "react";
import "./SizeList.css";
// import SizeButton from "./SizeButton"

const sizeList = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

const Size = ({ filterListBySize }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  // const [isSelected, setIsSelected] = useState(false);

  function clickHandler(e) {
    let prev = selectedSizes;
    prev.includes(e.target.innerHTML)
      ? prev.splice(prev.indexOf(e.target.innerHTML), 1)
      : prev.push(e.target.innerHTML);
    setSelectedSizes([...prev]);
    filterListBySize([...prev]);
  }

  return (
    <div>
      <div style={{ fontWeight: "bold" }}> Sizes : </div>
      <div className="grid-container">
        {sizeList.map((ele) => {
          return (
            // <SizeButton clickHandler = {clickHandler} ele= {ele} selectedSizes={selectedSizes}/>
            <button
              className={`size-button ${
                selectedSizes.includes(ele) && "selected"
              }`}
              onClick={clickHandler}
              key={Math.random()}
            >
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;

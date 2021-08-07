import "./SizeList.css";

export default function SizeButton({ clickHandler, ele, selectedSizes }) {
  return (
    <button
      className={`size-button ${selectedSizes.includes(ele) && "selected"}`}
      onClick={clickHandler}
      key={Math.random()}
    >
      {ele}
    </button>
  );
}

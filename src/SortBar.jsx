import "./SortBar.css";

export default function SortBar({ sortList }) {
  return (
    <span className="select">
      <label htmlFor="">Order By: </label>
      <select
        name=""
        id=""
        onChange={(e) => {
          sortList(e.target.value);
        }}
      >
        <option value="1">Lowest to Highest</option>
        <option value="-1">Highest to Lowest</option>
      </select>
    </span>
  );
}

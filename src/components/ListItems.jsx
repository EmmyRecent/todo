import { useState } from "react";

const ListItems = ({ text, onDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prevValue) => {
      return !prevValue;
    });
  };

  const handleDelete = () => {
    onDelete(text);
  };

  return (
    <div>
      <ul>
        <div className="flex items-center justify-between">
          <li
            className={`relative ml-12 cursor-pointer p-2 text-left text-lg md:text-xl lg:text-2xl ${checked && "line-through"} cursor-pointer list-disc`}
            onClick={handleClick}
          >
            {text}
          </li>
          <i
            className="bx bxs-trash bg-borderColor text-textColor mr-5 rounded px-2 py-1 text-sm"
            onClick={handleDelete}
          ></i>
        </div>
      </ul>
    </div>
  );
};

export default ListItems;

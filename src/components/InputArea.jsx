import { useState } from "react";

const InputArea = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation.
    if (input.trim() === "") {
      setError("Input cannot be empty!");
    } else {
      onAdd(input, setInput);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        className="font-architects text-inputColor mb-[20px] text-lg md:text-2xl"
        onChange={handleChange}
        value={input}
      />

      <button className="button">
        <span>Add</span>
      </button>

      {error && <p className="pb-2 text-xs text-red-600">{error}</p>}
    </form>
  );
};

export default InputArea;

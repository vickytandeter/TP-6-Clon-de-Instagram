import React from "react";
import { useState } from "react";

function SearchBar({ onSearch, onClear }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar publicacion..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
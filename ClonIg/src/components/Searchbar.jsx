import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
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
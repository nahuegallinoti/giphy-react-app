import React, { useState } from "react";
import { useLocation } from "wouter";

export default function Search() {
  const [keyword, setKeyword] = useState([]);
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="form-keyword">
      <input
        className="input-keyword"
        onChange={handleChange}
        type="text"
        value={keyword}
        placeholder="Harry Potter..."
      />
      <button className="btn-buscar">Buscar</button>
    </form>
  );
}

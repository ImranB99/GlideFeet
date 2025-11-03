import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      setQuery("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          name="Search"
          className="input w-full md:w-42 lg:w-full"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;

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
          className="input w-20 md:w-36 lg:w-48"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;

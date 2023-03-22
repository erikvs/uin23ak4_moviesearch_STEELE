import './css/main.css';
import React, { useState } from "react";
import Movies from "./components/Movies";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="App">
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search for a movie title..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {searchTerm.length >= 3 ? (
        <SearchResults searchTerm={searchTerm} />
      ) : (
        <Movies />
      )}
    </section>
  );
}

export default App;
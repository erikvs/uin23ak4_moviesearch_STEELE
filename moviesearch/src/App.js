import './custom.scss';
import React, { useState } from "react";
import Movies from "./components/Movies";
import SearchResults from "./components/SearchResults";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App bg-primary">
      <header>
        <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Enter title..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      </header>
      <body>
      {searchTerm.length >= 3 ? (
        <SearchResults searchTerm={searchTerm} />
      ) : (
        <Movies />
      )}
      </body>
    </div>
  );
}

export default App;
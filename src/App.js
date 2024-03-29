import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/Charactegrid";
import Search from "./components/ui/Search";
import data from "./data/characters.json";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Function to set the items from the imported JSON data
    const fetchItems = () => {
      setItems(data); // Set items directly from the imported JSON data
      setIsLoading(false); // Set loading to false after setting items
    };
    fetchItems(); // Call the fetchItems function
  }, []); // Empty dependency array to run once on initial render

  // Function to handle search query
  const handleSearch = (searchText) => {
    setQuery(searchText); // Update query state with the entered search text
  };

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <Search getQuery={handleSearch} />{" "}
      {/* Pass handleSearch function to Search component */}
      <CharacterGrid items={filteredItems} isLoading={isLoading} />{" "}
      {/* Pass filtered items to CharacterGrid component */}
    </div>
  );
};

export default App;

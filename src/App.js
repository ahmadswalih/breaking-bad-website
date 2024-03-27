import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const fectItems = async () => {
      setItems(data);
      setIsLoading(false);
    };
    fectItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;

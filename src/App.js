import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/Charactegrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fectItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
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
      <section className="textUnder">'it's just a fan-made website with lots of bugs'</section>
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;

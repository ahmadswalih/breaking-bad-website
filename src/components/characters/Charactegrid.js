import React from "react";
import Characteritems from "./Characteritems";
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner/>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Characteritems key={item.char_id} item={item}></Characteritems>
      ))}
    </section>
  );
};
export default CharacterGrid;

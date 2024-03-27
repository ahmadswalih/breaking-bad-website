import React from "react";

const Characteritems = ({ item }) => {
  const firstTwoOccupations = item.occupation.slice(0, 2);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.image_url} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>FullName:</strong> {item.full_name}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birth_date}
            </li>
            <li>
              <strong>Occupation:</strong>{" "}
              {firstTwoOccupations.map((occupation, index) => (
                <li key={index}>{occupation}</li>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characteritems;

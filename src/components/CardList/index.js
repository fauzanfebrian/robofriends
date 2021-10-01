import React from "react";
import Card from "../Card";
import "./index.css";

export default function CardList({ data }) {
  return (
    <div className="container-cardlist">
      {data.map((robot) => (
        <Card data={robot} key={robot.id} />
      ))}
    </div>
  );
}

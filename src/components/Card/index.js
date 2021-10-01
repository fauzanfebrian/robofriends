import React from "react";
import "./index.css";

export default function Card({ data: { username, name, email } }) {
  return (
    <div className="container-card">
      <div className="card">
        <img
          src={`https://robohash.org/${username}`}
          alt={username}
          width={200}
        />
        <h3 className="title-card">{name}</h3>
        <h6 className="subtitle-card">{email}</h6>
      </div>
    </div>
  );
}

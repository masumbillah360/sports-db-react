import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
  return (
    <div>
      <div>
        <input
          className="input-name"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="type players name.."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="player-container">
        {players.map((player) => (
          <Player playerInfo={player} key={player.idPlayer}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;

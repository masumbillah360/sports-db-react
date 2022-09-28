import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import "./Players.css";

const Players = ({cart, setCart}) => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data?.player));
  }, [search]);
  // const handleCart =(id)=>{
    // const selectedPlayer = players.find((player)=>player.idPlayer === id);
    // setPlayer(selectedPlayer)
// }
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
          <Player playerInfo={player} key={player.idPlayer} cart={cart} setCart = {setCart}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;

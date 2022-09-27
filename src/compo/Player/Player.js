import React from "react";
import "./Player.css";

const Player = ({ playerInfo, handleCart }) => {
  const { idPlayer, strPlayer, strTeam, strTeam2, strSport, strThumb } = playerInfo;
  const info = {
    idPlayer,
    strPlayer, 
    strTeam, 
    strTeam2,
    strSport,
    strThumb
  }
  return (
    <div className="player-info" data-aos="flip-up">
      <img className="thumbnail" src={strThumb} alt="notfound" />
      <h3>{strPlayer}</h3>
      <p>Category : {strSport}</p>
      <div className="team-info">
        <p>Team-1 : {strTeam}</p>
        <p>Team-2 : {strTeam2 ? strTeam2 : "not found"}</p>
      </div>
      <div className="all-btn">
        <button className="p-btn">BookMark</button>
        <button className="p-btn">Info</button>
        <button onClick={() => handleCart(idPlayer)} className="p-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default Player;

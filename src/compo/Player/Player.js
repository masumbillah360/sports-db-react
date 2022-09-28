import React from "react";
import "./Player.css";

const Player = ({ playerInfo, cart, setCart }) => {
  // console.log(cart, setCart);
  const { idPlayer, strPlayer, strTeam, strTeam2, strSport, strThumb } = playerInfo;
  const handleAddToCart = ()=>{
    const newInfo ={
      idPlayer,
      strPlayer
    }
    if(cart){
      setCart([...cart, newInfo]);
      return
    }
    else{
      setCart([newInfo])
      return
    }
  }
  const prevBookmark = localStorage.getItem('bookmark');
  const oldBookmark = JSON.parse(prevBookmark);
  const handleBooking =()=>{
    const bookInfo = {
      idPlayer,
      strPlayer,
      quantity : 1
    }
    if(oldBookmark){
      const isExist = oldBookmark.find(p=> p.idPlayer === idPlayer);
      if(isExist){
        isExist.quantity = isExist.quantity+1;
        localStorage.setItem('bookmark', JSON.stringify(oldBookmark))
      }
      else{
        localStorage.setItem('bookmark', JSON.stringify([...oldBookmark, bookInfo]))
      }
    }
    else{
      localStorage.setItem('bookmark', JSON.stringify([bookInfo]))
    }
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
        <button onClick={handleBooking} className="p-btn">BookMark</button>
        <button className="p-btn">Info</button>
        <button onClick={handleAddToCart} className="p-btn">
        {/* <button onClick={() => handleCart(idPlayer)} className="p-btn"> */}
          Add
        </button>
      </div>
    </div>
  );
};

export default Player;

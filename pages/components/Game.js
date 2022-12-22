import { useContext, useState, useEffect } from "react";
import AppContext from "../../AppContext";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissor from "./Scissor";

const Game = () => {
  const { user, setUser, randomize, computer, setComputer, setScore } =
    useContext(AppContext);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setTimeout(randomize, 500);
  }, [user]);

  useEffect(() => {
    if (user) {
      if (user === computer) {
        setWinner("Draw");
      } else if (
        (user === "rock" && computer === "scissor") ||
        (user === "scissor" && computer === "paper") ||
        (user === "paper" && computer === "rock")
      ) {
        setWinner("You Win");
        setScore((prev) => prev + 1);
      } else if (
        (computer === "rock" && user === "scissor") ||
        (computer === "scissor" && user === "paper") ||
        (computer === "paper" && user === "rock")
      ) {
        setWinner("You Lose");
      }
    }
  }, [user, computer]);

  const aiPicked = () => {
    if (computer === "paper") {
      return <Paper></Paper>;
    } else if (computer === "scissor") {
      return <Scissor></Scissor>;
    } else if (computer === "rock") {
      return <Rock></Rock>;
    } else {
      return <div className="blank-circle"></div>;
    }
  };

  return (
    <div className={`game-wrapper ${user ? "" : "off"}`}>
      <div className="game-container">
        <div className="user-choice">
          {user === "paper" ? <Paper></Paper> : ""}
          {user === "scissor" ? <Scissor></Scissor> : ""}
          {user === "rock" ? <Rock></Rock> : ""}
          <p className="game-name">YOU PICKED</p>
        </div>
        <div className="opponent">
          {aiPicked()}
          <p className="game-name">ENEMY PICKED</p>
        </div>
      </div>
      <p className="win-text">{winner}</p>
      <button
        onClick={() => {
          setUser(null);
          setComputer(null);
          setWinner(null);
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Game;

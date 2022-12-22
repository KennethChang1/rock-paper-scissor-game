import { useContext } from "react";
import Game from "./components/Game";
import AppContext from "../AppContext";
import Paper from "./components/Paper";
import Scissor from "./components/Scissor";
import Rock from "./components/Rock";
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const { user, setUser, score } = useContext(AppContext);
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__text">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSOR</p>
          </div>
          <div className="header__score">
            <p>SCORE</p>
            <p>{score}</p>
          </div>
        </header>

        <main>
          <div className={`choice-container ${user ? "off" : ""}`}>
            <div className="upper-row">
              <Paper
                onClick={() => {
                  setUser("paper");
                }}
              ></Paper>
              <Scissor onClick={() => setUser("scissor")}></Scissor>
            </div>
            <div className="bottom-row">
              <Rock onClick={() => setUser("rock")}></Rock>
            </div>
          </div>

          <Game></Game>
        </main>
      </div>
    </>
  );
}

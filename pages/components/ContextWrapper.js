import AppContext from "../../AppContext";
import { useState } from "react";

function ContextWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [AI, setAI] = useState(null);
  const array = ["paper", "scissor", "rock"];
  const [computer, setComputer] = useState("");
  const [score, setScore] = useState(0);

  const randomize = () => {
    if (user) {
      const randomElement = array[Math.floor(Math.random() * array.length)];
      setComputer(randomElement);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        AI,
        setAI,
        randomize,
        computer,
        setComputer,
        score,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextWrapper;

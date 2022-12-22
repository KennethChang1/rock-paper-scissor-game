import { useContext } from "react";
import AppContext from "../../AppContext";

const Rock = ({ onClick }) => {
  const { setUser } = useContext(AppContext);
  return (
    <div className="icon-container icon-container-red" onClick={onClick}>
      <img className="icon-img" src="/icon-rock.svg" alt="" />
    </div>
  );
};

export default Rock;

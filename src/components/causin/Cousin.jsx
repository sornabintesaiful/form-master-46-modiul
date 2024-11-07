import { useContext } from "react";
import Friend from "../friend/Friend";



const Cousin = ({ name }) => {
  
  return (
    <div>
      <h3>cousin</h3>
      <p>{name}</p>
      {name === 'Rubaiya' && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
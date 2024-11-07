import { useContext } from "react";
import { AssetContext } from "../grandPa/GrandPa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Special</h3>
      <p>Has: {asset}</p>
      <p>Also Has: {gift}</p>
    </div>
  );
};

export default Special;
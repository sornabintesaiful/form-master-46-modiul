import { createContext, useState } from "react";
import Aunty from "../aunty/Aunty";
import Dad from "../dad/dad";
import Uncle from "../uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext("Gold Ring");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
  const [money, setMoney] = useState(1000);

  const asset = 'diamond';
const secStyle = {
  display: 'flex'
};

  return (
    <div className="grandpa">
      <h2>Grand Pa</h2>
      <p>net money {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold">
          <div style={secStyle} className="grandpa">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
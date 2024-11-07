import { useContext } from "react";
import Cousin from "../causin/Cousin";
import { MoneyContext } from "../grandPa/GrandPa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext)
  const secStyle = {
    display: 'flex',
  };
  return (
    <div>
      <h3>Aunty</h3>
      <section style={secStyle}>
        <Cousin name={'Mamsat'}></Cousin>
        <Cousin name={'Rubaiya'}></Cousin>
      </section>
      <p>Money {money}</p>
      <button onClick={()=>setMoney(money+1000)}>Add money 1000</button>
    </div>
  );
};

export default Aunty;
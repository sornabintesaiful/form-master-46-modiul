import Brother from "../brother/Brother";
import Myself from "../mySelf/Myself";
import Sister from "../sister/Sister";
// import '...grandPa/GrandPa.css'

const Dad = ({asset}) => {
  const secStyle = {
    display: "flex"
  }

  return (
    <div>
      <h3>Dad</h3>
      <section style={secStyle} className="flex">
        <Myself asset={asset}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
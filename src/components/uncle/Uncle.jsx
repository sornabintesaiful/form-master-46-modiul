import Cousin from "../causin/Cousin";


const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flexitem">
        <Cousin name={'sohana'}></Cousin>
        <Cousin name={'rafsan'}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
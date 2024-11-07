import Special from "../special/Special";


const Myself = ({asset}) => {
  return (
    <div>
      <h3>My Self</h3>
      <section>
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Myself;
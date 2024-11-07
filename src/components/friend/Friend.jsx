import { AssetContext } from '../grandPa/GrandPa';
import { useContext } from 'react';
const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h3>Friend</h3>
      <p>has: {gift}</p>
    </div>
  );
};

export default Friend;

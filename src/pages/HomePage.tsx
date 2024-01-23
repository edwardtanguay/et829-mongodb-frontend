import { ObjectId } from 'mongoose';
import { useContext } from 'react';

interface ITraveData {
  _id: ObjectId;
}
export const HomePage = () => {
  const travelData = [];
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <ul>
        {travelData &&
          travelData.map((travel) => (
            <li key={travel._id}>{JSON.stringify(travel)}</li>
          ))}
      </ul>
    </div>
  );
};

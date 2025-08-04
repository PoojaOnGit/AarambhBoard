// Card.js
const Card = ({ title }) => (
  <div className="bg-blue-100 border rounded shadow p-4">
    <h3 className="font-bold mb-2">{title}</h3>
    <p>Some dummy data here</p>
  </div>
);

export default Card;
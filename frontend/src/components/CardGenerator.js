import React, { useState } from 'react';

const CardGenerator = () => {
  const [card, setCard] = useState({});
  const [error, setError] = useState(null);

  const generateCard = async () => {
    try {
      const response = await fetch('http://localhost:3002/generate-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCard(data);
      setError(null); // Clear any previous error
    } catch (error) {
      setError(error.message);
      setCard({});
    }
  };

  return (
    <div>
      <button onClick={generateCard}>Generate new card</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {card.cardNumber && (
        <div>
          <p>Card number: {card.cardNumber}</p>
          <p>CVV: {card.cvv}</p>
          <p>Date: {card.date}</p>
          <p>Name: {card.name}</p>
          <p>Zip code: {card.zip}</p>
        </div>
      )}
    </div>
  );
};

export default CardGenerator;
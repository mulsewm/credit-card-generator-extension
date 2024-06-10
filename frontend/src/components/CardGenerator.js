import React, { useState } from 'react';

const CardGenerator = () => {
    const [card, setCard] = useState({});

    const generateCard = async () => {
        const response = await fetch('http://localhost:3002/generate-card');
        const data = await response.json();
        setCard(data);
    };

    return (
        <div>
            <button onClick={generateCard}>Generate new card</button>
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
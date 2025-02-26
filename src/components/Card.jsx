import React from 'react';

const Card = ({ card, style = {} }) => {
  return (
    <div 
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        ...style
      }}
    >
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </div>
  );
};

export default Card;

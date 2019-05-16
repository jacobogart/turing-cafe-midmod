import React from 'react';

const ResyCard = (props) => {
  console.log(props);
  const { name, date, time, number } = props.resyData;
  return (
    <article className="ResyCard">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
      <button className="cancel-btn">Cancel</button>
    </article>
  );
};

export default ResyCard;
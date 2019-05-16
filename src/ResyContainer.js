import React from 'react';
import ResyCard from './ResyCard';


const ResyContainer = (props) => {
  const loadingMessage = (<h2>Loading...</h2>);
  const resyCards = props.reservations.map(resy => 
    <ResyCard 
      resyData={resy} 
      key={resy.id}
    />)
  return (
    <section className="ResyContainer">
      {props.reservations.length 
        ? resyCards
        : loadingMessage}
    </section>
  );
};

export default ResyContainer;
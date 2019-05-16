import React from 'react';
import ResyCard from '../ResyCard/ResyCard';

const ResyContainer = (props) => {
  const resyCards = props.reservations.map(resy => 
    <ResyCard 
      resyData={resy} 
      key={resy.id}
    />)
  return (
    <section>
      {resyCards}
    </section>
  );
};

export default ResyContainer;
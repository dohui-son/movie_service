import React from 'react';
import './Information.css';


function Information(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "About this page : I built this with the Framework REACT. "
      </span>
      <span> - Dohui Son - </span>
    </div>
  );
}


export default Information;
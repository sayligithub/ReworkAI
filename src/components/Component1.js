import React from 'react';
import "./Component1.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  letsTalk,
  theresaWebb,
  hRManagerAmazon,
}) => {
  return (
    <div className="component-16">
      <div className="rework-has-been">{reworkHasBeenAGreatWayToM}</div>
      <div className="telcos">
        <img className="lets-talk-icon" loading="lazy" alt="" src={letsTalk} />
        <div className="container">
          <h3 className="theresa-webb">{theresaWebb}</h3>
          <div className="hr-manager-amazon">{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;

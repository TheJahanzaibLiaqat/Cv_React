import React from 'react';
import CV from "/images/Jahanzaib.png"
import "./CVComp.css"

const CVComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="p-6 mt-10">
      <img src={CV} alt="CV" className="cv-image  h-32" />
    </div>
  );
});

CVComponent.displayName = 'CVComponent';

export default CVComponent;

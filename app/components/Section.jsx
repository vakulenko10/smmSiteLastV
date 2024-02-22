// SectionItem.js
import React from 'react';

const Section = ({ sectionName, sectionData, className }) => {
  return (
    <div className={`section w-full h-[100vh] ${className}`}>
      <h2>{sectionName}</h2>
      {sectionData.map((item, index) => (
        <div key={index}>
          
          {Object.keys(item).map((itemProperty, indexProp) => (
            <div key={indexProp}>
              {itemProperty}: {item[itemProperty]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Section;

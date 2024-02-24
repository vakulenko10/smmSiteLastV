"use client"
import React from 'react'
const SectionItem = ({ collectionName, item, index }) => {
  return (
    <div className={`flex flex-col`}>
      {Object.keys(item).map((itemProperty, indexProp) => (
        <div key={indexProp}>
          {itemProperty === 'imageURL' ? (
            <img className={`w-[400px] h-auto`} src={item[itemProperty]} alt={itemProperty} />
          ) : (
            renderTextByProperty(itemProperty, item[itemProperty])
          )}
        </div>
      ))}
    </div>
  );

  // Function to render text based on property
  function renderTextByProperty(property, text) {
    if (property.includes('Title')) {
      return <h1>{text}</h1>;
    } else if (property.includes('Description')) {
      return <h4>{text}</h4>;
    }
    else if (property.includes('Welcome')) {
      return <h2>{text}</h2>;
    }
    else if (property.includes('Question')) {
      return <h5>{text}</h5>;
    }
    else if (property.includes('Answer')) {
      return <p>{text}</p>;
    }
    else if (property.includes('imageDate')) {
      return <h5>{text}</h5>;
    }
    // Add more cases for other substrings or conditions as needed
    return <p>{text}</p>;
  }
};

export default SectionItem;
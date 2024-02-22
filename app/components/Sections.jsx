"use client"
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import Section from './Section'
// import { filterDataByLanguage } from './utils'; // Import the filterDataByLanguage function
export const filterDataByLanguage = (data) => {
    const unwantedProps = ["_id", "updatedAt", "createdAt", "__v"];
    
    const filteredData = {
        en: [],
        ua: []
    };
  
    for (const collectionName in data) {
        filteredData.en[collectionName] = data[collectionName].map(item => {
            const filteredItem = {};
            for (const key in item) {
                if (!key.startsWith('ua') && !unwantedProps.includes(key)) {
                    filteredItem[key] = item[key];
                }
            }
            return filteredItem;
        });
  
        filteredData.ua[collectionName] = data[collectionName].map(item => {
            const filteredItem = {};
            for (const key in item) {
                if (!key.startsWith('en') && !unwantedProps.includes(key)) {
                    filteredItem[key] = item[key];
                }
            }
            return filteredItem;
        });
    }
    console.log("filteredData:", filteredData)
    return filteredData;
  };
function Sections() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const {language, changeLanguage} = useLanguage();
  // changeLanguage("ua");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/fetchContentFromDB');
         // Assuming you've set up the API route to fetch data from MongoDB
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json(); 
        console.log("jsonData", jsonData)
        const filteredData = filterDataByLanguage(jsonData.data);
        console.log("filteredData after fetching:", filteredData)
        setData(filteredData[language]);
        console.log("data:", data)
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  console.log("data:", data)
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Object.keys(data):",Object.keys(data))
  // Assuming your data is an object where keys are collection names
  return (
    <ul>
    {Object.keys(data).map((section, index)=>{
       return <li key={index}> <Section sectionName={section} sectionData={data[section]} className={`bg-[#ff2727]`}/></li>
    })}
  </ul>
  );
}

export default Sections;

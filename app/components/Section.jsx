// SectionItem.js
import React from 'react';
import SectionItem from './SectionItem'
import { sectionClasses } from './mainconsts';
import Container from './Container'
import {collectionsToSections} from './mainconsts'
const Section = ({ collectionName, sectionData, className }) => {
  return (
    <div id={collectionsToSections[collectionName]} className={`${collectionsToSections[collectionName]} section w-full h-[100vh] overflow-hidden box-border ${className} ${sectionClasses[collectionName]}`}>
      <Container>
      <h2>{collectionsToSections[collectionName]}</h2>
      {sectionData.map((item, index) => (
        <div key={index}>
           <SectionItem item={item} collectionName={collectionName}/>
        </div>
      ))}</Container>
    </div>
  );
};

export default Section;

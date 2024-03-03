export const SectionIndex = {
    "helloitems": 0,
    "aboutmeitems":1,
    "myportfolioitems": 2,
    "faqsitems": 3,
    "myblogitems": 4
}
export const collectionsToSections = {
    "helloitems": "welcome",
    "aboutmeitems":"about",
    "myportfolioitems":"Portfolio",
    "faqsitems":"FAQS",
    "myblogitems":"Blog"
}
export const Sections = Object.values(collectionsToSections);
export const sectionClasses = {
    "helloitems": ' bg-gradient-to-br from-purple-400 via-pink-500 to-red-500  animate-gradient text-white pt-[50px] md:pt-0',
    "myportfolioitems": 'bg-[#fff]',
    "faqsitems": 'bg-[#242]',
    "aboutmeitems": 'bg-[#444]',
    "myblogitems": 'bg-[#7f7ha3]'
  
  }

export const SectionToRenderType = {
    "helloitems": "default",
    "aboutmeitems":"carousel",
    "myportfolioitems":"gallery",
    "faqsitems":"accordion",
    "myblogitems":"carousel"
}
export function renderTextByProperty(property, text, className) {
    if (property.includes('Title')) {
      return <h1 className={`${className}`}>{text}</h1>;
    } else if (property.includes('Description')) {
      return <h4 className={`${className}`}>{text}</h4>;
    }
    else if (property.includes('Welcome')) {
      return <h2 className={`${className}`}>{text}</h2>;
    }
    else if (property.includes('Question')) {
      return <h5 className={`${className}`}>{text}</h5>;
    }
    else if (property.includes('Answer')) {
      return <p className={`${className}`}>{text}</p>;
    }
    else if (property.includes('imageDate')) {
      return <h5 className={`${className}`}>{text}</h5>;
    }
    // Add more cases for other substrings or conditions as needed
    return <p className={`${className}`}>{text}</p>;
  }
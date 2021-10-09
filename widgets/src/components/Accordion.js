import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${index === activeIndex ? 'active' : ''}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className='ui container'>
      <div className='ui styled fluid accordion'>
        <br />
        {renderedItems}
      </div>
    </div>
  );
};

export default Accordion;

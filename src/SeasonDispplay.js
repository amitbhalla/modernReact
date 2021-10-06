import React from 'react';

import classes from './SeasonDisplay.module.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun outline',
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: 'snowflake outline',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={classes[season]}>
      <div className={classes.pso}>
        <i className={`${iconName} massive icon ${classes.left}`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} massive icon ${classes.right}`}></i>
      </div>
    </div>
  );
};

export default SeasonDisplay;

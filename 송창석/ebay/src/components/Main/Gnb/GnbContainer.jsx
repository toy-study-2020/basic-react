import React from 'react';
import GnbPresenter from './GnbPresenter';



const GnbContainer = ({apis}) => {
  const {main, side} = apis
  
  return (
    <GnbPresenter
      main={main}
      side={side}
    />
  );
};

export default GnbContainer;
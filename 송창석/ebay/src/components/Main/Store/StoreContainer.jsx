import React from 'react';
import StorePresenter from './StorePresenter';



const StoreContainer = ({apis}) => {
  const {title, items} = apis
  
  return (
    <StorePresenter
      title={title}
      items={items}
    />
  );
};

export default StoreContainer;
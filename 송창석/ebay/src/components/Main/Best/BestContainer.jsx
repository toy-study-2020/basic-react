import React from 'react';
import BestPresenter from './BestPresenter';

const BestContainer = ({apis}) => {
  const {title, items} = apis

  return (
    <BestPresenter
      title={title}
      items={items}
    />
  );
};

export default BestContainer;
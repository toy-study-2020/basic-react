import React from 'react';
import EventPresenter from './EventPresenter';

const EventContainer = ({apis}) => {
  const {title, items} = apis

  return (
    <EventPresenter
      title={title}
      items={items}
    />
  );
};

export default EventContainer;
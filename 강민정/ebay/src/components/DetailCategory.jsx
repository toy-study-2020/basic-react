import React from 'react';
import {Route} from 'react-router-dom';

const Detail = ({match}) => {
  return (
    <>
      <Route
        path={`${match.url}/:categoryIndex`}
        component={DetailCategoryTitle}
      />
    </>
  )
}

const DetailCategoryTitle = ({match}) => {
  return (
    <div>{match.params.categoryIndex} 카테고리</div>
  )
}

export default Detail;
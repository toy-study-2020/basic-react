import React from 'react';

function Item({title, items}) {

  const listArr = arr => {
    
    return arr.map((item, idx) => {
      return (
        <li key={idx}>
          <a href="#">
            <div className="thumb_img">
              <img src={item.imgSrc} alt=""/>
            </div>
            <div className="name">{item.imgAlt}</div>
          </a>
        </li>
      )
    })
  };

  return (
    <div className="brand_area">
      <div className="inner_layout">
        <h2 className="area_title">{title}</h2>
        <ul className="lst_brand">
          {listArr(items)}
        </ul>
      </div>
    </div>
  );
}

Item.defaultProps = {
  items: []
}

export default Item;

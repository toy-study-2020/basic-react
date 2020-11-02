import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/error.jpg';
import {UseAPI} from "./MainContainer";

const Product = () => {
  const {product} = useContext(UseAPI);
  const {title, items} = product;
  return (
    <>
      <div className="chance-wrapper">
        <h2>{title && title}</h2>
        <ul className="chance-list event-chance">
          {
            items && items.map((item, index) =>
              <li key={index}>
                <Link to={"/"}>
                  <span className="imgWrap">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      onError={e => {
                        e.target.src = errorImage;
                      }}
                    />
                  </span>
                  <span className="prdBadge">
                    {
                      item.badge.length > 0 && item.badge.map((badge, index) =>
                        <span key={index}>{badge}</span>
                      )
                    }
                  </span>
                  <strong>{item.name}</strong>
                  <span className="prdPrice">
                    {
                      item.originalPrice !== item.salePrice &&
                      <span className="prdOrigin">
                        {item.originalPrice}<em>$</em>
                      </span>
                    }
                    <span className="prdDiscount">
                      {item.salePrice}<em>$</em>
                    </span>
                  </span>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}

export default Product;
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/error.jpg';
import {UseAPI} from "./MainContainer";

const Best = () => {
  const {best} = useContext(UseAPI);
  const {title, items} = best;
  return (
    <>
      <div className="hot-wrapper">
        <h2>{title && title}</h2>
        <ul className="hot-list">
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
                  <strong>{item.name}</strong>
                  <span className="prdDescription">{item.description}</span>
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

export default Best;
import React from 'react';
import errorImage from '../images/error.jpg';
const Render = ({type, data}) => {
  const {
    mainMenu,
    sideMenu,
    title,
    items
  } = data;
  return (
    <>
      {type === 'menu' &&
        <div className="category-wrapper">
          <div className="category-list">
            <ul className="category-best">
              {mainMenu && data.mainMenu.map((item, index) =>
                <li className="category-list" key={index}>
                  <a href="#">
                    <strong>{item.name}</strong>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="category-list">
            <ul className="category-sub">
              {sideMenu && data.sideMenu.map((item, index) =>
                <li className="category-list" key={index}>
                  <a href="#">
                    <strong>{item.name}</strong>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      }

      {type === 'store' &&
        <div className="store-wrapper">
          <h2>{title}</h2>
          <ul className="store-list store-store">
            {items && data.items.map((item, index) =>
              <li key={index}>
                <a href="#">
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
                </a>
              </li>
            )}
          </ul>
        </div>
      }

      {type === 'best' &&
        <div className="hot-wrapper">
          <h2>{title}</h2>
          <ul className="hot-list">
            {items && data.items.map((item, index) =>
              <li key={index}>
                <a href="#">
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
                    {item.originalPrice !== item.salePrice &&
                      <span className="prdOrigin">
                        {item.originalPrice}<em>$</em>
                      </span>
                    }
                    <span className="prdDiscount">
                      {item.salePrice}<em>$</em>
                    </span>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      }

      {type === 'exhibition' &&
        <div className="event-wrapper">
          <h2>{title}</h2>
          <ul className="event-list event-event">
            {items && data.items.map((item, index) =>
              <li key={index}>
                <a href="#">
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
                </a>
              </li>
            )}
          </ul>
        </div>
      }

      {type === 'product' &&
        <div className="chance-wrapper">
          <h2>{title}</h2>
          <ul className="chance-list event-chance">
            {items && data.items.map((item, index) =>
              <li key={index}>
                <a href="#">
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
                    {item.badge.length > 0 &&
                      item.badge.map((badge, index) =>
                        <span key={index}>{badge}</span>
                      )
                    }
                  </span>
                  <strong>{item.name}</strong>
                  <span className="prdPrice">
                    {item.originalPrice !== item.salePrice &&
                    <span className="prdOrigin">
                        {item.originalPrice}<em>$</em>
                      </span>
                    }
                    <span className="prdDiscount">
                      {item.salePrice}<em>$</em>
                    </span>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      }
    </>
  )
}


export default Render;
import React, {useEffect, useState} from 'react';
import LoadData from "../../action/LoadData";
import errorImage from '../../images/error.jpg';

const Best = ({PATH}) => {
  const [best, setBest] = useState({});

  const renderBest = () => {
    LoadData(PATH, 'mainBest').then(data => {
      setBest({
        ...best,
        title: data.mainBest.title,
        items: data.mainBest.items
      });
    });
  };

  const {title, items} = best;

  useEffect(() => {
    renderBest();
  }, []);

  return (
    <>
      <div className="hot-wrapper">
        <h2>{title && title}</h2>
        <ul className="hot-list">
          {
            items && items.map((item, index) =>
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
                </a>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}

export default Best;
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/error.jpg';
import {UseAPI} from "../../routes/Main/MainContainer";

const Store = () => {
  const {store} = useContext(UseAPI);
  const {title, items} = store;
  return (
    <>
      <div className="store-wrapper">
        <h2>{title && title}</h2>
        <ul className="store-list store-store">
          {
            items && items.map((item, index) =>
              <li key={index}>
                <Link to={`/detailStore?product=${index}`}>
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
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}


export default Store;
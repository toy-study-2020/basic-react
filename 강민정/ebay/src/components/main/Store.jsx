import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/error.jpg';
import LoadData from "../../action/LoadData";

const Store = ({PATH}) => {
  const [store, setStore] = useState({});

  const renderStore = () => {
    LoadData(PATH, 'mainStore').then(data => {
      setStore({
        ...store,
        title: data.mainStore.title,
        items: data.mainStore.items
      });
    });
  };

  useEffect(() => {
    renderStore();
  });

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
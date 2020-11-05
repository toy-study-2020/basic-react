import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/error.jpg';
import {UseAPI} from "../../routes/Main/MainContainer";

const Exhibition = () => {
  const {exhibition} = useContext(UseAPI);
  const {title, items} = exhibition;
  return (
    <>
      <div className="event-wrapper">
        <h2>{title && title}</h2>
        <ul className="event-list event-event">
          {items && items.map((item, index) =>
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
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Exhibition;
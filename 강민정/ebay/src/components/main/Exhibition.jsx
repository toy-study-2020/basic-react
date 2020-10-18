import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import errorImage from '../../images/error.jpg';
import LoadData from "../../action/LoadData";

const Exhibition = ({PATH}) => {
  const [exhibition, setExhibition] = useState({});

  const renderExhibition = () => {
    LoadData(PATH, 'mainEvent').then(data => {
      setExhibition({
        ...exhibition,
        title: data.mainEvent.title,
        items: data.mainEvent.items
      });
    });
  };

  const {title, items} = exhibition;

  useEffect(() => {
    renderExhibition();
  }, []);

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
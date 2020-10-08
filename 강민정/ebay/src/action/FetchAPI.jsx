import React, {useState, useEffect} from 'react';
import Render from '../components/Render';

const FetchAPI = ({API}) => {
  const [gnb, setGnb] = useState({});
  const [store, setStore] = useState({});
  const [best, setBest] = useState({});
  const [exhibition, setExhibition] = useState({});
  const [product, setProduct] = useState({});

  const loadData = async (API) => {
    const PATH = 'https://baekcode.github.io/APIs/';
    const response = await fetch(`${PATH}${API}.json`);
    const data = await response.json();
    renderData(API, data);
  };

  const renderData = (API, data) => {
    switch (API) {
      case 'menu':
        setGnb({
          ...gnb,
          mainMenu: data.mainMenu,
          sideMenu: data.sideMenu
        });
        break;
      case 'mainStore':
        setStore({
          ...store,
          title: data.mainStore.title,
          items: data.mainStore.items
        });
        break;
      case 'mainBest':
        setBest({
          ...best,
          title: data.mainBest.title,
          items: data.mainBest.items
        });
        break;
      case 'mainEvent':
        setExhibition({
          ...exhibition,
          title: data.mainEvent.title,
          items: data.mainEvent.items
        });
        break;
      case 'mainProducts':
        setProduct({
          ...product,
          title: data.mainProducts.title,
          items: data.mainProducts.items
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    loadData(API).then(r => console.log('data load'));
  }, []);

  return (
    <>
      {(gnb.mainMenu || gnb.sideMenu) &&
        <Render
          type="menu"
          data={gnb}
        />
      }
      {store.items &&
        <Render
          type="store"
          data={store}
        />
      }
      {best.items &&
        <Render
          type="best"
          data={best}
        />
      }
      {exhibition.items &&
        <Render
          type="exhibition"
          data={exhibition}
        />
      }
      {product.items &&
        <Render
          type="product"
          data={product}
        />
      }
    </>
  )
}

export default FetchAPI;
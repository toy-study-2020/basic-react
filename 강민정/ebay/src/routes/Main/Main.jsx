import React, {createContext} from 'react';
import MainContainer from "./MainContainer";

const PATH = 'https://baekcode.github.io/APIs/';
export const PATHContext = createContext('');
const Main = () => {
  return (
    <>
      <PATHContext.Provider value={PATH}>
        <MainContainer/>
      </PATHContext.Provider>
    </>
  )
}

export default Main;
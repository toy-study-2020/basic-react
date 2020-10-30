import React from 'react';
import { MAIN_APIS } from '../../constant/constant';
import MainUtils from '../../utils/MainUtils';
import MainPresenter from './MainPresenter';

const ConstantContext = React.createContext(null)
const ApisContext = React.createContext(null)
const DispatchContext = React.createContext(null)
const FetchDataContext = React.createContext(null)

export {
    ConstantContext,
    ApisContext,
    DispatchContext,
    FetchDataContext
}

const MainContainer = () => {
    const {apis, dispatchApis, fetchData} = MainUtils()

    return (
        <ConstantContext.Provider value={MAIN_APIS}>
            <ApisContext.Provider value={apis}>
                <DispatchContext.Provider value={dispatchApis}>
                    <FetchDataContext.Provider value={fetchData}>
                        <MainPresenter apis={apis}/>
                    </FetchDataContext.Provider>
                </DispatchContext.Provider>
            </ApisContext.Provider>
        </ConstantContext.Provider>
    )
}

export default MainContainer;
import React, { useContext, useEffect } from 'react';
import { ApisContext, ConstantContext, DispatchContext, FetchDataContext } from '../../../routes/Main/MainContainer';
import MainGnbPresenter from './MainGnbPresenter';



const MainGnbContainer = () => {
    const {MENU} = useContext(ConstantContext)
    const apis = useContext(ApisContext)
    const dispatchApis = useContext(DispatchContext)
    const fetchData = useContext(FetchDataContext)

    

    useEffect(() => {
        fetchData(dispatchApis, "DISPATCH_GNB", MENU)
    }, [MENU, dispatchApis, fetchData])

    
    
    return (
        <MainGnbPresenter
            main={apis[MENU].main}
            side={apis[MENU].side}
        />
    );
};

export default MainGnbContainer;
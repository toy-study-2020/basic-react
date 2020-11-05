import React, { useContext, useEffect } from 'react';
import { ApisContext, ConstantContext, DispatchContext, FetchDataContext } from '../../../routes/Main/MainContainer';
import MainStorePresenter from './MainStorePresenter';



const MainStoreContainer = () => {
    const {STORE} = useContext(ConstantContext)
    const apis = useContext(ApisContext)
    const dispatchApis = useContext(DispatchContext)
    const fetchData = useContext(FetchDataContext)

    

    useEffect(() => {
        fetchData(dispatchApis, "DISPATCH_CONTENT", STORE)
    }, [STORE, dispatchApis, fetchData])

    

    return (
        <MainStorePresenter
            title={apis[STORE].title}
            items={apis[STORE].items}
        />
    );
};

export default MainStoreContainer;
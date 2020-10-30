import React, { useContext, useEffect } from 'react';
import { ApisContext, ConstantContext, DispatchContext, FetchDataContext } from '../../../routes/Main/MainContainer';
import MainEventPresenter from './MainEventPresenter';

const MainEventContainer = () => {
    const {EVENT} = useContext(ConstantContext)
    const apis = useContext(ApisContext)
    const dispatchApis = useContext(DispatchContext)
    const fetchData = useContext(FetchDataContext)

    useEffect(() => {
        fetchData(dispatchApis, "DISPATCH_CONTENT", EVENT)
    }, [EVENT, dispatchApis, fetchData])

    

    return (
        <MainEventPresenter
            title={apis[EVENT].title}
            items={apis[EVENT].items}
        />
    );
};

export default MainEventContainer;
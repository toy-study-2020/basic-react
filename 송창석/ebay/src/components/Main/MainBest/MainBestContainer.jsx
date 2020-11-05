import React, { useContext, useEffect } from 'react';
import { ApisContext, ConstantContext, DispatchContext, FetchDataContext } from '../../../routes/Main/MainContainer';
import MainBestPresenter from './MainBestPresenter';

const MainBestContainer = () => {
    const {BEST} = useContext(ConstantContext)
    const apis = useContext(ApisContext)
    const dispatchApis = useContext(DispatchContext)
    const fetchData = useContext(FetchDataContext)

    useEffect(() => {
        fetchData(dispatchApis, "DISPATCH_CONTENT", BEST)
    }, [BEST, dispatchApis, fetchData])

    

    return (
        <MainBestPresenter
            title={apis[BEST].title}
            items={apis[BEST].items}
        />
    );
};

export default MainBestContainer;
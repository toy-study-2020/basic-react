import React, { useContext, useEffect } from 'react';
import { ApisContext, ConstantContext, DispatchContext, FetchDataContext } from '../../../routes/Main/MainContainer';
import MainProductsPresenter from './MainProductsPresenter';

const MainProductsContainer = () => {
    const {PRODUCTS} = useContext(ConstantContext)
    const apis = useContext(ApisContext)
    const dispatchApis = useContext(DispatchContext)
    const fetchData = useContext(FetchDataContext)

    useEffect(() => {
        fetchData(dispatchApis, "DISPATCH_CONTENT", PRODUCTS)
    }, [PRODUCTS, dispatchApis, fetchData])

    

    return (
        <MainProductsPresenter
            title={apis[PRODUCTS].title}
            items={apis[PRODUCTS].items}
        />
    );
};

export default MainProductsContainer;
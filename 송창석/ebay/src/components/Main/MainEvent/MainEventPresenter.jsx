import React from 'react';
import { MainContTitle, MainImgStyles, MainItemDescStyles } from '../../../routes/Main/MainContStyles';
import { IntervalSection } from '../../../GlobalStyles';
import { MainEventStyles } from './MainEventStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const MainEventPresenter = ({title, items}) => {
    return (
        <MainEventStyles>
            <IntervalSection>
                <MainContTitle>{title}</MainContTitle>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    navigation
                    loop
                >
                    {items.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <a href={"#n"}>
                                    <MainImgStyles><img src={item.imgSrc} alt={item.alt} /></MainImgStyles>
                                    <MainItemDescStyles>
                                        <dl>
                                            <dt>{item.name}</dt>
                                            <dd>{item.description}</dd>
                                        </dl>
                                    </MainItemDescStyles>
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </IntervalSection>
        </MainEventStyles>
    );
};

export default MainEventPresenter;
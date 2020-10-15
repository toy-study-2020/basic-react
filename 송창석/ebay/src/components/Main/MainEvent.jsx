import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../fetch';
import { MainImgStyles, MainItemDescStyles } from '../../styled/Main/MainContStyles';
import { MainEventStyles } from '../../styled/Main/MainEventStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const MainEvent = ({ IntervalSection, MainContTitle, getURL }) => {
    const [title, setTitle] = useState("");
    const [event, setEvent] = useState([]);

    useEffect(() => {
        const res = fetchJson(getURL)
        res.then(data => {
            setTitle(data.mainEvent.title)
            setEvent(data.mainEvent.items)
        })
    },[getURL]);

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
                    {event.map((item) => {
                        return(
                            <SwiperSlide key={item.id}>
                                <a href={"#n"}>
                                    <MainImgStyles><img src={item.imgSrc} alt={item.alt}/></MainImgStyles>
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

export default MainEvent;
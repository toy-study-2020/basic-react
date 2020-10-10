import React, { useEffect, useState } from 'react';
import { MainEventStyles } from './MainContStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { CLASS_NAME } from '../../constant/constant';

SwiperCore.use([Navigation]);

const MainEvent = ({ IntervalSection, MainContTitle, fetchItem }) => {
    const [title, setTitle] = useState("");
    const [event, setEvent] = useState([]);
    const {MAIN_EVENT} = CLASS_NAME;
    const {IMG, DESC} = MAIN_EVENT;

    useEffect(() => {
        fetchItem.then(data => {
            setTitle(data.mainEvent.title)
            setEvent(data.mainEvent.items)
        })
    })

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
                                    <div className={IMG}><img src={item.imgSrc} alt={item.alt}/></div>
                                    <div className={DESC}>
                                        <dl>
                                            <dt>{item.name}</dt>
                                            <dd>{item.description}</dd>
                                        </dl>
                                    </div>
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
import * as S from "./carouselStyle.jsx"
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import Angular from "../assets/angular.png"
import Js from "../assets/js.png"
import Python from "../assets/python.png"
import Rct from "../assets/react.png"
import Ts from "../assets/ts.png"
import Vue from "../assets/vue.png"

register();
// import 'swiper/navigation'
// import 'swiper/pagination'

function Carousel() {

    const data = [
        {id: '1', image:{Angular} },
        {id: '2', image:{Js} },
        {id: '3', image:{Python} },
        {id: '4', image:{Rct} },
        {id: '5', image:{Ts} },
        {id: '6', image:{Vue} }
    ]

    return(
        <S.Section>
            <Swiper
            slidesPerView={1}
            pagination={{ clickable: true}}
            navigation
            >
                {data.map((item) => {
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt=""
                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </S.Section>
    )
}

export default Carousel
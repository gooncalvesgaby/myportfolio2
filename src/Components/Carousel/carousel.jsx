import * as S from "./carouselStyle.jsx"
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import Angular from "../../assets/angular.png"
import Js from "../../assets/js.png"
import Python from "../../assets/python.png"
import Rct from "../../assets/react.png"
import Ts from "../../assets/ts.png"
import Vue from "../../assets/vue.png"

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><S.Img
                        src={Vue}
                        alt=""
                        />
      </SwiperSlide>
      <SwiperSlide><S.Img
                        src={Rct}
                        alt=""
                        />
      </SwiperSlide>
      <SwiperSlide><S.Img
                        src={Angular}
                        alt=""
                        />
      </SwiperSlide>
      <SwiperSlide><S.Img
                        src={Js}
                        alt=""
                        />
      </SwiperSlide>
      <SwiperSlide><S.Img
                        src={Ts}
                        alt=""
                        />
      </SwiperSlide>
      <SwiperSlide><S.Img
                        src={Python}
                        alt=""
                        />
      </SwiperSlide>
      
    </Swiper>
    )
}

export default Carousel
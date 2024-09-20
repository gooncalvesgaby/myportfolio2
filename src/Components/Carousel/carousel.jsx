import * as S from "./carouselStyle.jsx"
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import myCss from "../../assets/css.png"
import Js from "../../assets/js.png"
import Rct from "../../assets/react.png"
import Ts from "../../assets/ts.png"
import myHtml from "../../assets/html.png"
import sc from "../../assets/sc.png"

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {

    const data = [
        {id: '1', image:{myCss} },
        {id: '2', image:{Js} },
        {id: '3', image:{sc} },
        {id: '4', image:{Rct} },
        {id: '5', image:{Ts} },
        {id: '6', image:{myHtml} }
        
    ]

    return(
      <S.CarouselContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><S.Img
                            src={myHtml}
                            alt="Imagem de marcação HTML"
                            />
          </SwiperSlide>
          <SwiperSlide><S.Img
                            src={myCss}
                            alt="Imagem de estilo CSS"
                            />
          </SwiperSlide>
          <SwiperSlide><S.Img
                            src={Js}
                            alt="Imagem da linguagem JS"
                            />
          </SwiperSlide>
          <SwiperSlide><S.Img
                            src={Ts}
                            alt="Imagem da linguagem TS"
                            />
          </SwiperSlide>
          <SwiperSlide><S.Img
                            src={Rct}
                            alt="Imagem do framework React"
                            />
          </SwiperSlide>
          <SwiperSlide><S.Img
                            src={sc}
                            alt="Imagem de estilov styled-components"
                            />
          </SwiperSlide>
        </Swiper>
      </S.CarouselContainer>
    )
}

export default Carousel
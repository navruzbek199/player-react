import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './comedy.scss';


const comedy = (props) => {

    return (
        <div>
            <div className="comedy">
      <Container>
        <Row>
          <Col md={4}>
            <div className="recomen-title">
              <p>Комедии</p>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="recomen-swiper">
              <Swiper
                navigation={{
                  prevEl: '.prev',
                  nextEl: '.next',
                }}
                {...props}
                breakpoints={{
                  375: {
                    width: 375,
                    slidesPerView: 2,
                  },
                  425: {
                    width: 425,
                    slidesPerView: 2,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 3,
                  },
                  992: {
                    width: 992,
                    slidesPerView: 4,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 5,
                  },
                }}
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film11.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Ёлки последние</p>
                              <span>2018, Фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film12.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Патрик</p>
                              <span>2018, Фэнтези</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film13.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>8 подруг Оушена</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film14.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Васаби</p>
                              <span>2018, Фэнтези/Боевик</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film16.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num2">
                            <span>Megogo</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Снегоуборщик</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film15.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Очень плохие мамочки</p>
                              <span>2018, Научная фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film11.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Бегущий в лабиринте</p>
                              <span>2018, Фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film12.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Хан Соло: Звёздные войны</p>
                              <span>2018, Фэнтези</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film13.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Красный воробей</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film14.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Tomb Raider: Лара Крофт</p>
                              <span>2018, Фэнтези/Боевик</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film15.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num2">
                            <span>Megogo</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Логово Монстра</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                ...
                <div className="prev" />
                <div className="next" />
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    )
}

export default comedy

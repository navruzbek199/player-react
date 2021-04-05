import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './uzfilm.scss';
function uzfilm() {
    return (
        <div>
            <div className="uzfilm" id="film">
      <Container>
        <Row>
          <Col md={4}>
            <div className="recomen-title">
              <p>Узбекские фильмы</p>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="recomen-swiper">
              <Swiper
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 2,
                },
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
                          <img src="img/film33.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>SCORPION</p>
                              <span>2018, Фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film28.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Born of the ashes</p>
                              <span>2018, Фэнтези</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film29.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>FORTITUDE</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film30.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>ISLOMHODJA</p>
                              <span>2018, Фэнтези/Боевик</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film31.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num2">
                            <span>Megogo</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Behind the Peace</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film32.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>HAYOT</p>
                              <span>2018, Научная фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/Mask Group.png" alt="bg"/>
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
                          <img src="img/Mask Group-1.png" alt="bg"/>
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
                          <img src="img/Mask Group-2.png" alt="bg"/>
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
                          <img src="img/Mask Group-3.png" alt="bg"/>
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
                          <img src="img/Mask Group-4.png" alt="bg"/>
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
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    )
}

export default uzfilm

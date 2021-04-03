import React from 'react'
import './tvseries.scss';
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function tvseries() {
    return (
        <div>
             <div className="tvseries">
      <Container>
        <Row>
          <Col md={4}>
            <div className="recomen-title">
              <p>Cериалы</p>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="recomen-swiper">
              <Swiper
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
                          <img src="img/film21.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Босс</p>
                              <span>2018, Фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film22.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Игра престолов</p>
                              <span>2018, Фэнтези</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film23.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Викинги</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film24.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Дублинские убийства</p>
                              <span>2018, Фэнтези/Боевик</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film25.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num2">
                            <span>Megogo</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Агнцы божьи</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film26.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Джон Адамс</p>
                              <span>2018, Научная фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film22.png" alt="bg"/>
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
                          <img src="img/film21.png" alt="bg"/>
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
                          <img src="img/film24.png" alt="bg"/>
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
                          <img src="img/film26.png" alt="bg"/>
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
                          <img src="img/film23.png" alt="bg"/>
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

export default tvseries

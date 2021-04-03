import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './hotitem.scss'
function hotitem() {
    return (
        <div>
            <div className="hotitem">
      <Container>
        <Row>
          <Col md={4}>
            <div className="recomen-title">
              <p>Горячие новинки</p>
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
                          <img src="img/film1.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Лёд</p>
                              <span>2018, Фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film2.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Вторжение</p>
                              <span>2018, Фэнтези</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film3.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Кома</p>
                              <span>2018, Драма/Триллер</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film4.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num">
                            <span>Ivi.ru</span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Звёздный разум</p>
                              <span>2018, Фэнтези/Боевик</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film5.png" alt="bg"/>
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
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film6.png" alt="bg"/>
                      </div>
                      <div className="card-about">
                          <div className="card-num1">
                            <span><img src="img/new Logo2 4.png" alt="bg"/></span>
                            <span>16+</span>
                          </div>
                          <div className="card-text">
                              <p>Красный призрак</p>
                              <span>2018, Научная фантастика</span>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                      <div className="card-img">
                          <img src="img/film1.png" alt="bg"/>
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
                          <img src="img/film2.png" alt="bg"/>
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
                          <img src="img/film3.png" alt="bg"/>
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
                          <img src="img/film4.png" alt="bg"/>
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
                          <img src="img/film6.png" alt="bg"/>
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

export default hotitem

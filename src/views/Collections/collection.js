import React from 'react'
import './collection.scss';
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

function collection() {
    return (
        <div>
            <div className="collection">
        <Container>
          <Row>
            <Col md={4}>
              <div className="joint-title">
                <p>
                Коллекции
                </p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}></Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="joint-text">
                <p>
                На нашем сайте вы можете просматривать контент от разных сервисов
                </p>
              </div>
            </Col>
            <Col md="9">
              <div className="joint-swp">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={2}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/film18.png" alt="chanel" />
                      </div>
                      <div className="col1-text">
                            <p>Боевики</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/film19.png" alt="chanel" />
                      </div>
                      <div className="col2-text">
                            <p>Научная фантастика</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/film20.png" alt="chanel" />
                      </div>
                      <div className="col3-text">
                            <p>Все фильмы: Marvel</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/film18.png" alt="chanel" />
                      </div>
                      <div className="col1-text">
                            <p>Боевики</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/film19.png" alt="chanel" />
                      </div>
                      <div className="col3-text">
                            <p>Все фильмы: Marvel</p>
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

export default collection

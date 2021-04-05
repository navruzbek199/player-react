import React from 'react'
import './service.scss';
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";



function service() {
    return (
        <div>
            <div className="service">
        <Container>
          <Row>
            <Col md={4}>
              <div className="joint-title">
                <p>
                Сервисы
                </p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}></Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="joint-text">
                <p>
                На нашем сайте вы можете  оплачивать подписку и  просматривать контент от  разных сервисов
                </p>
              </div>
            </Col>
            <Col md="9">
              <div className="joint-swp">
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
                    slidesPerView: 3,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 3,
                  },
                }}
                  spaceBetween={75}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img mt-4">
                        <img src="img/new Logo2 4.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img">
                        <img src="img/service_Megogo.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img">
                        <img src="img/service_Ivi.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img">
                        <img src="img/service_Amediateka.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img mt-4">
                        <img src="img/new Logo2 4.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img">
                        <img src="img/service_Megogo.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img">
                        <img src="img/service_Ivi.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="ser-img">
                        <img src="img/service_Amediateka.png" alt="chanel" />
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

export default service

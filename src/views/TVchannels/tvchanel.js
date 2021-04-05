import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./tvchanel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

function tvchanel() {
  return (
    <div>
      <div className="tvchanel">
        <Container>
          <Row>
            <Col md={4}>
              <div className="joint-title">
                <p>
                  Совместный  просмотр
                </p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}></Col>
          </Row>
          <Row>
            <Col md="3">
              <div className="joint-text">
                <p>
                  На нашем сайте вы можете  просматривать контент от{" "}
                  <br /> разных сервисов
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
                      slidesPerView: 4,
                    },
                    1024: {
                      width: 1024,
                      slidesPerView: 5,
                    },
                  }}
                  spaceBetween={75}
                  slidesPerView={4}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/NTV-1.png" alt="chanel" />
                        <img src="img/NTV-2.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/NTV-3.png" alt="chanel" />
                        <img src="img/NTV-4.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/NTV-5.png" alt="chanel" />
                        <img src="img/NTV-6.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/NTV-7.png" alt="chanel" />
                        <img src="img/NTV-8.png" alt="chanel" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card-swp">
                      <div className="card-img">
                        <img src="img/NTV-9.png" alt="chanel" />
                        <img src="img/NTV.png" alt="chanel" />
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
  );
}

export default tvchanel;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./jointview.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Eye } from "react-bootstrap-icons";

function jointview() {
  return (
    <div className="jointview">
      <Container>
        <Row>
          <Col md={4}>
            <div className="joint-title">
              <p>
                Совместный <br /> просмотр
              </p>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }}></Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="joint-text">
              <p>
                Вы можете смотреть фильмы и  сериалы со своими друзьями
              </p>
            </div>
          </Col>
          <Col md="8">
            <div className="joint-swp">
              <Swiper
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1,
                },
                375: {
                  width: 375,
                  slidesPerView: 1,
                },
                425: {
                  width: 425,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
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
                spaceBetween={30}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-img">
                      <img src="img/img3.png" alt="bg" />
                    </div>
                    <div className="card-joint d-flex">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-sec">
                        <img src="img/admin.png" alt="bg" />
                        <p>Дмитрий К.</p>
                        <h6>+</h6>
                        <span>
                          <Eye />8
                        </span>
                      </div>
                    </div>
                    <div className="card-text">
                      <p>Пароль: Хаус</p>
                      <span>2019, Триллер, Ужасы</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-img">
                      <img src="img/img2.png" alt="bg" />
                    </div>
                    <div className="card-joint d-flex">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-sec">
                        <img src="img/admin.png" alt="bg" />
                        <p>Дмитрий К.</p>
                        <h6>+</h6>
                        <span>
                          <Eye />8
                        </span>
                      </div>
                    </div>
                    <div className="card-text">
                      <p>Пароль: Хаус</p>
                      <span>2019, Триллер, Ужасы</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-img">
                      <img src="img/img1.png" alt="bg" />
                    </div>
                    <div className="card-joint d-flex">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-sec">
                        <img src="img/admin.png" alt="bg" />
                        <p>Дмитрий К.</p>
                        <h6>+</h6>
                        <span>
                          <Eye />8
                        </span>
                      </div>
                    </div>
                    <div className="card-text">
                      <p>Пароль: Хаус</p>
                      <span>2019, Триллер, Ужасы</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-img">
                      <img src="img/img3.png" alt="bg" />
                    </div>
                    <div className="card-joint d-flex">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-sec">
                        <img src="img/admin.png" alt="bg" />
                        <p>Дмитрий К.</p>
                        <h6>+</h6>
                        <span>
                          <Eye />8
                        </span>
                      </div>
                    </div>
                    <div className="card-text">
                      <p>Пароль: Хаус</p>
                      <span>2019, Триллер, Ужасы</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-img">
                      <img src="img/img1.png" alt="bg" />
                    </div>
                    <div className="card-joint d-flex">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-sec">
                        <img src="img/admin.png" alt="bg" />
                        <p>Дмитрий К.</p>
                        <h6>+</h6>
                        <span>
                          <Eye />8
                        </span>
                      </div>
                    </div>
                    <div className="card-text">
                      <p>Пароль: Хаус</p>
                      <span>2019, Триллер, Ужасы</span>
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
  );
}

export default jointview;

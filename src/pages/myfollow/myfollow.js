import React, { useState } from "react";
import {
    Container,
    Breadcrumb,
    Row,
    Col,
    ButtonGroup,
    ToggleButton,
    Button,
} from 'react-bootstrap';
import { Film, Star } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./myfollow.scss";
import {Link as NavLink} from "react-router-dom"

function Myfollow() {
  const [checked, setChecked] = useState(false);

  const [check, setCheck] = useState(false);

  return (
    <div className="myfollow">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item><NavLink to="/"> Главная </NavLink></Breadcrumb.Item>
          <Breadcrumb.Item href="follow">Мои подписки</Breadcrumb.Item>
          <Breadcrumb.Item active>Подписка Player.uz</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md="6">
            <div className="myfollow-title">
              <p>Подписка Player.uz</p>
              <span>Нет активных подписок</span>
            </div>
          </Col>
          <Col md="6">
            <div className="myfollow-brd">
              <img src="img/new Logo2 4.png" alt="brd" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="myfollow-plan">
              <p>Выберите тариф</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Premium
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Standart
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      UZ Standart
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Amediateka
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Premium
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Start Tarif
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="follow-swp">
                  <ButtonGroup toggle className="mb-2">
                    <ToggleButton
                      type="checkbox"
                      variant="secondary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Premium
                    </ToggleButton>
                  </ButtonGroup>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col md="12">
            <div className="plan-sec">
              <div className="plan-item-one">
                <div className="plan-img">
                  <Film />
                </div>
                <div className="plan-text">
                  <p>Более 80 000 сериалов и фильмов</p>
                  <span>
                    эксклюзивы ivi, каталоги Disney, <br /> Marvel, Warner,
                    Paramount и др.
                  </span>
                </div>
              </div>
              <div className="plan-item-sec">
                <div className="plan-img">
                  <Star />
                </div>
                <div className="plan-text">
                  <p>Более 80 000 сериалов и фильмов</p>
                  <span>
                    эксклюзивы ivi, каталоги Disney, <br /> Marvel, Warner,
                    Paramount и др.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="myfollow-plan">
              <p>Выберите период подписки</p>
            </div>
          </Col>
          <Col md="12">
            <div className="plan-category">
              <Swiper
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="plan-swp">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={check}
                        onChange={() => setCheck(!check)}
                      />
                      1 месяц / 25 000 сум
                    </label>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan-swp">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={check}
                        onChange={() => setCheck(!check)}
                      />
                     3 месяца / 70 000 сум <br/>
                    </label>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan-swp">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={check}
                        onChange={() => setCheck(!check)}
                      />
                      6 месяцев / 140  000 сум <br/>
                    </label>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan-swp">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={check}
                        onChange={() => setCheck(!check)}
                      />
                      1 месяц / 25 000 сум
                    </label>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan-swp">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={check}
                        onChange={() => setCheck(!check)}
                      />
                      3 месяц / 25 000 сум
                    </label>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plan-swp">
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked={check}
                        onChange={() => setCheck(!check)}
                      />
                     3 месяц / 25 000 сум
                    </label>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
          <Col md="12">
            <div className="plan-btn">
                <Button className="pln-btn" variant="light">
                Подключить на 1 месяц
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Myfollow;

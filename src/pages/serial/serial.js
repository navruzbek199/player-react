import React, { useState } from "react";
import "./serial.scss";
import {
  Container,
  Breadcrumb,
  Button,
  NavLink,
  Tab,
  Tabs,
  Row,
  Col,
} from "react-bootstrap";
import background from "./images/bg1.png";
import { BookmarkPlus, Play } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper.scss";
function Serial() {
  const [key, setKey] = useState("home");
  return (
    <div className="serial-page">
      <div
        className="serial-bg"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>
      <div className="serial">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Главная</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="servis">Сервисы</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Викинги</Breadcrumb.Item>
          </Breadcrumb>
          <div className="serial-title">
            <h1>Викинги</h1>
          </div>
          <div className="serial-link">
            <span>
              <img src="img/new Logo2 4.png" alt="logo" />
            </span>
            <span>+18</span>
            <p>2019, Фантастика, Боевик</p>
          </div>
          <div className="serial-status">
            <p>
              <span>7.2</span> <br /> IMDb
            </p>
            <p>
              <span>8.7</span> <br /> КиноПоиск
            </p>
          </div>
          <div className="serial-btn">
            <Link to="/">
            <Button className="btn-s" variant="success">
              <Play />
              Смотреть
            </Button>
            </Link>
            <Button className="btn-t" variant="light">
              <BookmarkPlus /> в избранное
            </Button>
          </div>
          <div className="serial-about">
            <p>
              Сага о скандинавских героях средневековья. История <br />{" "}
              возвышения могущественного вождя викингов Рагнара <br />
              Лодброка и его семьи, которая возглавляет поход на чужие <br />{" "}
              неизведанные земли. Австралийский актер...
            </p>
            <NavLink href="#">Подробнее</NavLink>
          </div>
          <div className="serial-watch">
            <div className="servis-p">
              <p>Этот фильм на других сервисах:</p>
            </div>
            <div className="serial-servis">
              <span>
                <img src="img/logo1.png" alt="logo" />
                megogo
              </span>
              <span>
                {" "}
                <img src="img/amedia 1 1.svg" alt="logo" />
              </span>
              <span>
                <img src="img/logo3.png" alt="logo" />
                ivi.ru
              </span>
            </div>
          </div>
        </Container>
        <Container>
          <div className="serial-tab">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title="Сезон 1">
                <div className="film-slide">
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
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Посвящение</p>
                          <span>1 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>3 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Испытание</p>
                          <span>4 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>5 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>6 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>3 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Испытание</p>
                          <span>4 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>5 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Сезон 2">
                <div className="film-slide">
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
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="ser" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>3 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Испытание</p>
                          <span>4 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>5 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Сезон 3">
                <div className="film-slide">
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
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Посвящение</p>
                          <span>1 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>3 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Испытание</p>
                          <span>4 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
              <Tab eventKey="serial" title="Сезон 4">
                <div className="film-slide">
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
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Посвящение</p>
                          <span>1 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="card" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>3 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
              <Tab eventKey="film" title="Сезон 5">
                <div className="film-slide">
                  <Swiper
                    breakpoints={{
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
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Посвящение</p>
                          <span>1 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>3 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 19.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Испытание</p>
                          <span>4 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>5 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 21.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Лишённые имущества</p>
                          <span>6 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="serial-swp">
                        <div className="serials">
                          <img src="img/image 20.png" alt="serial" />
                        </div>
                        <div className="card-text">
                          <p>Гнев норманнов</p>
                          <span>2 серия</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="serial-actor">
            <div className="title">
              <p>Актеры и создатели</p>
            </div>
            <div className="actor-swp">
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
                slidesPerView={7}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/4f2165952e881f4da02fb4dc36c1b0 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Кен <br /> Джиротти
                      </p>
                      <span>Режиссёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/3d1c8951a1491de98f5bb9859c1a81 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Киаран <br /> Доннелли
                      </p>
                      <span>Режиссёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/99eb0b202be645a1434ad0b30f7109 (1) 1.png"
                        alt="card-img"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Тревис <br /> Фиммел
                      </p>
                      <span>Актёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/5484915beb7525b7ebddffc573173b 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Кэтрин <br /> Унник
                      </p>
                      <span>Актёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/b50be9f7d97c880991c1337ce268fb 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Александр <br />
                        Людвиг
                      </p>
                      <span>Актёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/a9dcd320c24cc4bdf8b44875a4b49a 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Кен <br /> Джиротти
                      </p>
                      <span>Режиссёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/cd2a7fe215f57fad2d6a7fb7a182b3 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Киаран
                        <br /> Доннелли
                      </p>
                      <span>Режиссёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-swp">
                    <div className="card-circle">
                      <img
                        src="img/d9dfc955fa605d3c97e43b5adef2f2 1.png"
                        alt="card"
                      />
                    </div>
                    <div className="card-person">
                      <p>
                        Тревис
                        <br /> Фиммел
                      </p>
                      <span>Актёр</span>
                    </div>
                  </div>
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
          <div className="triler">
            <div className="title">
              <p>Трейлеры</p>
            </div>
            <div className="triler-card">
              <Row>
                <Col md="4">
                  <div className="tri-box">
                    <img src="img/image 25.png" alt="triler" />
                    <p>Тизер 1 сезон </p>
                    <span>Русский язык</span>
                  </div>
                </Col>
                <Col md="4">
                  <div className="tri-box">
                    <img src="img/image 26.png" alt="triler" />
                    <p>Тизер 5 сезон </p>
                    <span>Русский язык</span>
                  </div>
                </Col>
                <Col md="4">
                  <div className="tri-box">
                    <img src="img/image 27.png" alt="triler" />
                    <p>Тизер 9 сезон </p>
                    <span>Английский язык</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="again-film">
            <div className="title">
              <p>Что еще посмотреть?</p>
            </div>
            <Row>
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
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={40}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="servis-card">
                    <div className="card-img">
                      <img src="img/film40.png" alt="card" />
                    </div>
                    <div className="card-about">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-text">
                        <p>Остаться в живых</p>
                        <span>2018, Фантастика</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="servis-card">
                    <div className="card-img">
                      <img src="img/film41.png" alt="card" />
                    </div>
                    <div className="card-about">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-text">
                        <p>Сектор ЗЕРО</p>
                        <span>2018, Фантастика</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="servis-card">
                    <div className="card-img">
                      <img src="img/film42.png" alt="card" />
                    </div>
                    <div className="card-about">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-text">
                        <p>Доктор Кто</p>
                        <span>2018, Фантастика</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="servis-card">
                    <div className="card-img">
                      <img src="img/film43.png" alt="card" />
                    </div>
                    <div className="card-about">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-text">
                        <p>Обвиняемый</p>
                        <span>2018, Фантастика</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="servis-card">
                    <div className="card-img">
                      <img src="img/film44.png" alt="card" />
                    </div>
                    <div className="card-about">
                      <div className="card-num">
                        <span>Ivi.ru</span>
                        <span>16+</span>
                      </div>
                      <div className="card-text">
                        <p>Наводнение</p>
                        <span>2018, Фантастика</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Serial;

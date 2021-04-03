import React, { Component } from "react";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import "./Servis.scss";
import { ArrowUp, ArrowDown, Filter, PlusCircle } from "react-bootstrap-icons";
import "react-rangeslider/lib/index.css";
import Slider from "react-rangeslider";

class Servis extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isChecked: true,
    };
    this.state = {
      show_filter: false,
    };
    this.state = {
      volume: 1,
    };

    this.showFilter = this.showFilter.bind(this);
  }

  showFilter() {
    this.setState({ show_filter: !this.state.show_filter });
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  handleOnChange = (value) => {
    this.setState({
      volume: value,
    });
  };

  render() {
    let { volume } = this.state;
    return (
      <div className="servis">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
            <Breadcrumb.Item active>Сервисы</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col md="6">
              <div className="servis-title">
                <p>Сериалы</p>
              </div>
            </Col>
            <Col md="6">
              <div className="servis-item">
                <Button className="btn-left btn-light">
                  <ArrowUp />
                  <ArrowDown /> по дате выхода
                </Button>
                <Button
                  className="btn-right btn-light"
                  onClick={this.showFilter}
                >
                  <Filter />
                  фильтр<Badge variant="light">9</Badge>
                </Button>
              </div>
            </Col>
          </Row>
          {this.state.show_filter ? (
            <Row>
              <div className="filtr-list">
                <Col md="4">
                  <div className="genre">
                    <div className="title">
                      <p>Жанр</p>
                    </div>
                    <label>
                      Триллер
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Боевик
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Фантастика
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Приключения
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Криминал
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Телешоу
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Ужасы
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      спорт
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      аниме
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      Драма
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      комедия
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      фэнтези
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                  </div>
                </Col>
                <Col md="4">
                  <div className="county">
                    <div className="title">
                      <p>Страна</p>
                    </div>
                    <label>
                      <img src="img/usa.svg" alt="map" /> США
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      <img src="img/england.svg" alt="map" />
                      великобритания
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      <img src="img/belgium.svg" alt="map" />
                      бельгия
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      <img src="img/germany.svg" alt="map" />
                      германия
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      <img src="img/russia.svg" alt="map" /> Россия
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      <img src="img/canada.svg" alt="map" />
                      канада
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                    <label>
                      <img src="img/uzb.svg" alt="map" />
                      узбекистан
                      <input
                        type="checkbox"
                        // defaultChecked={this.state.isChecked}
                        onChange={this.toggleChange}
                        placeholder="Триллер"
                        defaultChecked={false}
                      />
                    </label>
                  </div>
                </Col>
                <Col md="4">
                  <div className="released-date">
                    <div className="title">
                      <p>Год выхода</p>
                    </div>
                    <div className="slider-data">
                      <Slider

                        value={volume}
                        orientation="horizontal"
                        onChange={this.handleOnChange}
                        min={1975}
                        max={2021}
                        step={2}
                        labels={1975}
                      />
                    </div>
                    <div className="data-servis">
                      <div className="title">
                        <p>Сервис</p>
                      </div>
                      <div className="checkbox-servis">
                        <label>
                          <img src="img/new Logo2 5.svg" alt="logo" />
                          <input
                            type="checkbox"
                            defaultChecked={this.state.isChecked}
                            onChange={this.toggleChange}
                          />
                        </label>
                        <label>
                          <img src="img/logo1.png" alt="logo" />megogo
                          <input
                            type="checkbox"
                            defaultChecked={this.state.isChecked}
                            onChange={this.toggleChange}
                          />
                        </label>
                        <label>
                          <img src="img/amedia 1 1.svg" alt="logo" />
                          <input
                            type="checkbox"
                            defaultChecked={this.state.isChecked}
                            onChange={this.toggleChange}
                          />
                        </label>
                        <label>
                          <img src="img/logo3.png" alt="logo" />ivi.ru
                          <input
                            type="checkbox"
                            defaultChecked={this.state.isChecked}
                            onChange={this.toggleChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          ) : (
            ""
          )}
          <Row>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film1.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film2.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film3.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film4.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film5.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film6.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film24.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film21.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film22.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film23.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film11.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film12.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film13.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film14.png" alt="bg" />
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
            </Col>
            <Col md="3">
              <div className="servis-card">
                <div className="card-img">
                  <img src="img/film15.png" alt="bg" />
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
            </Col>
          </Row>
          <Row>
            <div className="servis-all">
              <Button className="btn-all btn-light">
                <PlusCircle /> Показать еще
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Servis;

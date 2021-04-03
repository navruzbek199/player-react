import React from "react";
import { Col, Container, Row, NavItem, NavLink } from "react-bootstrap";
import "./footer.scss";
import { Link } from "react-router-dom";
function footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="3">
            <div className="foot-logo">
              <Link to="/">
                <img src="img/new Logo2 4.png" alt="logo" />
              </Link>
              <p>© 2019 Player. Все права защищены. </p>
            </div>
          </Col>
          <Col md="6">
            <div className="nav-foter">
              <div className="nav-top">
                <NavItem>
                  <NavLink href="#">Сериалы</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Фильмы</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Телеканалы</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Сервисы</NavLink>
                </NavItem>
              </div>
              <div className="nav-bottom">
                <NavItem>
                  <NavLink href="#">Реклама на сайте</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Подписки</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Избранное</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Пользовательское соглашение</NavLink>
                </NavItem>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="footer-dowload">
              <Link to="/">
                <img src="img/appstore 2.png" alt="iphone" />
                <img src="img/ru-play-badge 2.png" alt="android" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default footer;

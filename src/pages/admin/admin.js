import React from "react";
import { Button, Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { DoorOpen, PlayCircle } from "react-bootstrap-icons";
import "./admin.scss";
import {Link} from 'react-router-dom';
;function Admin() {
  return (
    <div className="admin-page">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Личный кабинет</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md="6">
            <div className="header-left">
              <div className="admin-img">
                <img src="img/admin2.png" alt="adm" />
              </div>
              <div className="admin-name">
                <h2>Иван Штапов</h2>
                <p>+998 97 733 30 06</p>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="header-right">
              <Link to="bgslider">
                <Button className="admin-btn" variant="light">
                  <DoorOpen /> Выйти с аккаунта
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="admin-card">
              <div className="adm-icon">
                <PlayCircle />
              </div>
              <div className="adm-text">
                <p>Подписка</p>
                <span>до 28 февраля 2020</span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="admin-card">
              <div className="adm-icon">
                <PlayCircle />
              </div>
              <div className="adm-text">
                <p>15 037 сум</p>
                <span>Мой счет</span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="admin-card">
              <div className="adm-icon">
                <PlayCircle />
              </div>
              <div className="adm-text">
                <p>Мои устройства</p>
                <span>3 устройства</span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="admin-card">
              <div className="adm-icon">
                <PlayCircle />
              </div>
              <div className="adm-text">
                <p>Уведомления</p>
                <span>Нет новых уведомлений</span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="admin-card">
              <div className="adm-icon">
                <PlayCircle />
              </div>
              <div className="adm-text">
                <p>Личные данные</p>
                <span>Имя, телефон, email</span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="admin-card">
              <div className="adm-icon">
                <PlayCircle />
              </div>
              <div className="adm-text">
                <p>Настройки аккаунта</p>
                <span>Язык, уведомления</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;

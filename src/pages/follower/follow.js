import React from "react";
import { Container, Breadcrumb, Row, Col, Button } from "react-bootstrap";
import "./follow.scss";
import { Link } from 'react-router-dom';

function Follow() {
  return (
    <div className="follow">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Главная</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>Сервисы</Breadcrumb.Item>
        </Breadcrumb>
        <div className="follow-title">
          <p>Мои подписки</p>
        </div>
        <Row>
            <Col md="4">
              <div className="brand-box">
                <div className="brand-img"> 
                    <img src="img/new Logo2 4.png" alt="brand-lgo"/>
                </div>
                <div className="brand-name">
                    <h5>ТВ и Кино</h5>
                    <p>Подписка <span>Premium</span>  активна до 2 янв 2020г</p>
                </div>
                <div className="brand-btn">
                    <p>35 каналов Player и коллекция лучшего кино</p>
                    <Link to="/myfollow">
                    <Button className="brd-btn" variant="light">
                    <p>Подписка на  Player <br/> <span>от 24999 UZS в месяц</span></p> 
                    </Button>
                    </Link>
                    
                </div>
              </div>
            </Col>
            <Col md="4">
            <div className="brand-box">
                <div className="brandx-img"> 
                    <img src="img/service_Ivi.png" alt="brand"/>
                </div>
                <div className="brand-name">
                    <h5>ТВ и Кино</h5>
                    <p>Подписка не подключена</p>
                </div>
                <div className="brand-btn">
                    <p>35 каналов Player и коллекция лучшего кино</p>
                    <Link to="#">
                    <Button className="brd-btn" variant="light">
                    <p>Подписка на  IVI <br/> <span>от 24999 UZS в месяц</span></p> 
                    </Button>
                    </Link>
                </div>
              </div>
            </Col>
            <Col md="4">
            <div className="brand-box">
                <div className="brandy-img"> 
                    <img src="img/brand-logo.svg" alt="brand"/>
                </div>
                <div className="brand-name">
                    <h5>ТВ и Кино</h5>
                    <p>Подписка не подключена</p>
                </div>
                <div className="brand-btn">
                    <p>35 каналов Player и коллекция лучшего кино</p>
                    <Link to="#">
                    <Button className="brd-btn" variant="light">
                    <p>Подписка на  Megogo <br/> <span>от 24999 UZS в месяц</span></p> 
                    </Button>
                    </Link>
                    
                </div>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Follow;

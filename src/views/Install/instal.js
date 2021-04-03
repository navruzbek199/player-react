import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './instal.scss';


function instal() {
    return (
        <div className="install">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="inst-img">
                            <img src="img/tv.png" alt="tv"/>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="inst-about">
                            <p>Player на всех ваших устойствах</p>
                            <span>Ищите наше приложение на своем  SmartTV , планшете и смартфоне и смотрите ТВ и кино везде, где вам удобно.</span>
                            <div className="download">
                                <img src="img/appstore 1.png" alt="download"/>
                                <img src="img/ru-play-badge 1.png" alt="download"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default instal

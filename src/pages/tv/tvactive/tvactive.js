import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Tabs } from "react-bootstrap";
import { PlayCircle, Unlock } from "react-bootstrap-icons";
import Iframe from "react-iframe";
import "./tvactive.scss";
function Tvactive() {
  const [key, setKey] = useState("home");
  return (
    <div className="tvnoactive">
      <Container fluid>
        <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="bg-tv">
                    <Iframe
                      width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className="video_bg"
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="seven">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="eight">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="nine">
                  <div className="bg-tv">
                    <Iframe
                    width="100%"
                      height="615"
                      src="https://www.youtube.com/embed/LgUA6ozJVIY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col md={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-1.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            Матч ТВ <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Все на Матч! Прямой эфир. Аналитик....</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-2.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-3.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-4.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-5.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="six">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-6.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seven">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-7.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eight">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-8.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="nine">
                    <div className="tv-chanel">
                      <div className="left-chanel">
                        <img src="img/NTV-9.png" alt="bg" />
                      </div>
                      <div className="right-chanel">
                        <div className="chanel-name">
                          <p>
                            НТВ HD <span>HD</span>
                          </p>
                          <Unlock />
                        </div>
                        <div className="chanel-text">
                          <p>Остросюжетный сериал «Топтуны»</p>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <Container>
        <Row>
          <div className="tab-sec">
            <div className="tv-title">
              <p>Телепрограмма</p>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="monday" title="сб, 18 января"></Tab>
              <Tab eventKey="thuesday" title="вс, 19 января"></Tab>
              <Tab eventKey="home" title="Сегодня, 20 января">
                <div className="tab-tv">
                  <div className="tv-table">
                    <ul>
                      <li>10:00</li>
                      <li>
                        <PlayCircle />
                        Киндер-Вилейское приведение
                      </li>
                    </ul>
                    <ul>
                      <li>10:10</li>
                      <li>
                        <PlayCircle />
                        Венок сонетов
                      </li>
                    </ul>
                    <ul>
                      <li>11:45</li>
                      <li>
                        <PlayCircle />
                        Индюки: назад в будущее
                      </li>
                    </ul>
                    <ul>
                      <li>13:10</li>
                      <li>
                        <PlayCircle />
                        Сладкое прошание Веры
                      </li>
                    </ul>
                    <ul>
                      <li>14:40</li>
                      <li>
                        <PlayCircle />
                        Займальная азбука
                      </li>
                    </ul>
                    <ul>
                      <li>16:20</li>
                      <li>
                        <div className="live">
                          <img src="img/Ellipse 13.svg" alt="live" />
                          <p>сейчас</p>
                        </div>
                        Гарри Поттер и Дары Смерти: Часть I
                      </li>
                    </ul>
                    <ul>
                      <li>16:40</li>
                      <li>Индюки: назад в будущее</li>
                    </ul>
                    <ul>
                      <li>18:05</li>
                      <li>Чудеса в день рождения</li>
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="thursday" title="вт, 21 января"></Tab>
              <Tab eventKey="friday" title="ср, 22 января"></Tab>
              <Tab eventKey="sunday" title="сб, 18 января"></Tab>
              <Tab eventKey="saturday" title="вс, 19 января"></Tab>
            </Tabs>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Tvactive;

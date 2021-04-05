import React from "react";
import "./humburgermenu.scss";
import $ from "jquery";
import { Button, Container, Dropdown, Badge } from "react-bootstrap";
import { Nav, NavLink, NavItem } from "reactstrap";
import {
  Globe,
  Film,
  Circle,
  ChevronDown,
  Bell,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class Hamburgermenu extends React.Component {

    componentDidMount(){
        $('.hamburger-menu').on('click', function(){
            $('.hamburger-menu').removeClass('active')
            $('#nav-icon1').removeClass('open')
        });
        $('.hamburger-menu .nav-menu').on('click', function(){
          $('.hamburger-menu').removeClass('active')
          $('#nav-icon1').removeClass('open')
        });
      }
  render() {

    return (
      <div className="hamburger-menu">
        <Container>
          <div className="nav-menu">
            <div className="logo">
              <Link to="/">
                <img src="img/new Logo2 4.png" alt="logos" />
              </Link>
            </div>
            <Nav className="nav-item">
              <NavItem>
                <NavLink href="/serial">Сериалы</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#film">Фильмы</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tv">Телеканалы</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/servis">Сервисы</NavLink>
              </NavItem>
              <NavItem>
                <div className="nav-btn">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <Circle />
                      <Circle />
                      <Circle />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="drop-item" href="#/action-1">
                        совместный просмотр
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item" href="#/action-2">
                        коллекции
                      </Dropdown.Item>
                      <Dropdown.Item className="drop-item" href="#/action-3">
                        телеканалы
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </NavItem>
            </Nav>
            <div className="contact-menu">
              <Link to="/follow">
                <Button id="/follow" className="btn-top">
                  {" "}
                  <Film /> мои подписки
                </Button>
              </Link>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <Globe /> Ru <ChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Uz</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">En</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="/admin">
                <img src="img/admin.png" alt="admin"/>
              </Link>
              <div className="bell-icon">
                <Bell />
                <Badge variant="danger"></Badge>{" "}
              </div>
              <div className="search-icon">
                <Search/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Hamburgermenu;
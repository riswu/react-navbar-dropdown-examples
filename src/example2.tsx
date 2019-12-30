import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import './example2.scss';

const Example2: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <div className="title">Example 2</div>
      </div>

      <div className="navbar__menu">
        <div className="menu">
          <Link to="/example1" className="menu__item">Exapmle 1</Link>
          <div className="menu__separator" />
          <Link to="/example2" className="menu__item">Exapmle 2</Link>
          <div className="menu__spacer" />
          <NavbarDropdown>
            <NavbarDropdown.Toggle>
              <NavbarDropdown.Open className="menu__item">
                <FontAwesomeIcon icon={faBars} fixedWidth />
              </NavbarDropdown.Open>
              <NavbarDropdown.Close className="menu__item">
                <FontAwesomeIcon icon={faTimes} fixedWidth />
              </NavbarDropdown.Close>
            </NavbarDropdown.Toggle>
            <NavbarDropdown.Menu className="example2-dropdown-menu" interval="4px" align="right">
              <NavbarDropdown.Container className="example2-dropdown-menu__row">
                <NavbarDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'lightblue' }}
                >
                  Item 1
                </NavbarDropdown.Item>
                <NavbarDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'lightgreen' }}
                >
                  Item 2
                </NavbarDropdown.Item>
              </NavbarDropdown.Container>
              <NavbarDropdown.Container className="example2-dropdown-menu__row">
                <NavbarDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'orange' }}
                >
                  Item 3
                </NavbarDropdown.Item>
                <NavbarDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'greenyellow' }}
                >
                  Item 4
                </NavbarDropdown.Item>
              </NavbarDropdown.Container>
            </NavbarDropdown.Menu>
          </NavbarDropdown>
        </div>
      </div>
    </div>
  );
};

export default Example2;

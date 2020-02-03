import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faTh,
  faUser,
  faBookmark,
  faArchive,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import './example2.scss';

const Example2Dropdown: React.FC = () => {
  return (
    <NavbarDropdown>
      <NavbarDropdown.Toggle>
        <NavbarDropdown.Open className="menu__item">
          <FontAwesomeIcon icon={faTh} fixedWidth />
        </NavbarDropdown.Open>
        <NavbarDropdown.Close className="menu__item">
          <FontAwesomeIcon icon={faTimes} fixedWidth />
        </NavbarDropdown.Close>
      </NavbarDropdown.Toggle>
      <NavbarDropdown.Menu
        className="example2-dropdown-menu"
        between="4px"
        align="right"
      >
        <div className="example2-dropdown-menu__row">
          <NavbarDropdown.Item
            className="example2-dropdown-menu-item"
            onClick={() => alert('Item 1: clicked!')}
          >
            <div className="example2-dropdown-menu-item__icon">
              <FontAwesomeIcon icon={faUser} fixedWidth />
            </div>
            <div className="example2-dropdown-menu-item__text">Item 1</div>
          </NavbarDropdown.Item>
          <NavbarDropdown.Item
            className="example2-dropdown-menu-item"
            onClick={() => alert('Item 2: clicked!')}
          >
            <div className="example2-dropdown-menu-item__icon">
              <FontAwesomeIcon icon={faBookmark} fixedWidth />
            </div>
            <div className="example2-dropdown-menu-item__text">Item 2</div>
          </NavbarDropdown.Item>
        </div>
        <div className="example2-dropdown-menu__row">
          <NavbarDropdown.Item
            className="example2-dropdown-menu-item"
            onClick={() => alert('Item 3: clicked!')}
          >
            <div className="example2-dropdown-menu-item__icon">
              <FontAwesomeIcon icon={faArchive} fixedWidth />
            </div>
            <div className="example2-dropdown-menu-item__text">Item 3</div>
          </NavbarDropdown.Item>
          <NavbarDropdown.Item
            className="example2-dropdown-menu-item"
            onClick={() => alert('Item 4: clicked!')}
          >
            <div className="example2-dropdown-menu-item__icon">
              <FontAwesomeIcon icon={faCog} fixedWidth />
            </div>
            <div className="example2-dropdown-menu-item__text">Item 4</div>
          </NavbarDropdown.Item>
        </div>
      </NavbarDropdown.Menu>
    </NavbarDropdown>
  );
};

const Example2: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <div className="title">Example 2</div>
      </div>
      <div className="navbar__menu">
        <div className="menu">
          <Link className="menu__item" to="/example1">Exapmle 1</Link>
          <div className="menu__separator" />
          <Link className="menu__item" to="/example2">Exapmle 2</Link>
          <div className="menu__spacer" />
          <Example2Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Example2;

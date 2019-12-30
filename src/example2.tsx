import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import './example2.scss';

const Example2Dropdown: React.FC = () => {
  return (
    <NavbarDropdown>
      <NavbarDropdown.Toggle>
        <NavbarDropdown.Open className="menu__item">
          <FontAwesomeIcon icon={faBars} fixedWidth />
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
        <NavbarDropdown.Container
          className="example2-dropdown-menu__row"
        >
          <NavbarDropdown.Item
            className="example2-dropdown-menu__item"
            style={{ backgroundColor: 'lightblue' }}
            onClick={() => alert('Item 1: clicked!')}
          >
            Item 1
          </NavbarDropdown.Item>
          <NavbarDropdown.Item
            className="example2-dropdown-menu__item"
            style={{ backgroundColor: 'lightgreen' }}
            onClick={() => alert('Item 2: clicked!')}
          >
            Item 2
          </NavbarDropdown.Item>
        </NavbarDropdown.Container>
        <NavbarDropdown.Container
          className="example2-dropdown-menu__row"
        >
          <NavbarDropdown.Item
            className="example2-dropdown-menu__item"
            style={{ backgroundColor: 'orange' }}
            onClick={() => alert('Item 3: clicked!')}
          >
            Item 3
          </NavbarDropdown.Item>
          <NavbarDropdown.Item
            className="example2-dropdown-menu__item"
            style={{ backgroundColor: 'greenyellow' }}
            onClick={() => alert('Item 4: clicked!')}
          >
            Item 4
          </NavbarDropdown.Item>
        </NavbarDropdown.Container>
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

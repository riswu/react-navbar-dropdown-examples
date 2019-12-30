import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import './example1.scss';

const Example1Dropdown: React.FC = () => {
  return (
    <NavbarDropdown>
      <NavbarDropdown.Toggle>
        <NavbarDropdown.Open className="menu__item">
          <FontAwesomeIcon icon={faCaretDown} fixedWidth />
        </NavbarDropdown.Open>
        <NavbarDropdown.Close className="menu__item">
          <FontAwesomeIcon icon={faCaretUp} fixedWidth />
        </NavbarDropdown.Close>
      </NavbarDropdown.Toggle>
      <NavbarDropdown.Menu
        className="example1-dropdown-menu"
        between="4px"
        align="right"
      >
        <NavbarDropdown.Item
          className="example1-dropdown-menu__item"
          onClick={() => alert('Item 1: clicked!')}
        >
          Item 1
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example1-dropdown-menu__item"
          onClick={() => alert('Item 2: clicked!')}
        >
          Item 2
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example1-dropdown-menu__item"
          onClick={() => alert('Item 3: clicked!')}
        >
          Item 3
        </NavbarDropdown.Item>
        <NavbarDropdown.Item
          className="example1-dropdown-menu__item"
          onClick={() => alert('Item 4: clicked!')}
        >
          Item 4
        </NavbarDropdown.Item>
      </NavbarDropdown.Menu>
    </NavbarDropdown>
  );
};

const Example1: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <div className="title">Example 1</div>
      </div>
      <div className="navbar__menu">
        <div className="menu">
          <Link className="menu__item" to="/example1">Exapmle 1</Link>
          <div className="menu__separator" />
          <Link className="menu__item" to="/example2">Exapmle 2</Link>
          <div className="menu__spacer" />
          <Example1Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Example1;

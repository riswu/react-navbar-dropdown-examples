import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import './example1.scss';

const Example1: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <div className="title">Example 1</div>
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
                <FontAwesomeIcon icon={faCaretDown} fixedWidth />
              </NavbarDropdown.Open>
              <NavbarDropdown.Close className="menu__item">
                <FontAwesomeIcon icon={faCaretUp} fixedWidth />
              </NavbarDropdown.Close>
            </NavbarDropdown.Toggle>
            <NavbarDropdown.Menu className="example1-dropdown-menu" interval="4px" align="right">
              <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 1</NavbarDropdown.Item>
              <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 2</NavbarDropdown.Item>
              <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 3</NavbarDropdown.Item>
              <NavbarDropdown.Item className="example1-dropdown-menu__item">Item 4</NavbarDropdown.Item>
            </NavbarDropdown.Menu>
          </NavbarDropdown>
        </div>
      </div>
    </div>
  );
};

export default Example1;

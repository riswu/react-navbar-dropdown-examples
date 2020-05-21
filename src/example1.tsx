import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faUser, faBookmark, faArchive, faCog } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';
import './example1.scss';

const Example1Dropdown: React.FC = () => {
  return (
    <NavbarDropdown>
      <NavbarDropdown.Toggle className="menu__item">
        <NavbarDropdown.Open>
          <FontAwesomeIcon icon={faCaretDown} fixedWidth />
        </NavbarDropdown.Open>
        <NavbarDropdown.Close>
          <FontAwesomeIcon icon={faCaretUp} fixedWidth />
        </NavbarDropdown.Close>
      </NavbarDropdown.Toggle>
      <NavbarDropdown.CSSTransitionMenu
        className="example1-dropdown-menu"
        classNames="example1-dropdown-menu"
        timeout={200}
      >
        <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 1: clicked!')}>
          <div>
            <FontAwesomeIcon icon={faUser} fixedWidth />
          </div>
          <div className="example1-dropdown-menu-item__spacer" />
          <div className="example1-dropdown-menu-item__text">Item 1</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 2: clicked!')}>
          <div>
            <FontAwesomeIcon icon={faBookmark} fixedWidth />
          </div>
          <div className="example1-dropdown-menu-item__spacer" />
          <div className="example1-dropdown-menu-item__text">Item 2</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 3: clicked!')}>
          <div>
            <FontAwesomeIcon icon={faArchive} fixedWidth />
          </div>
          <div className="example1-dropdown-menu-item__spacer" />
          <div className="example1-dropdown-menu-item__text">Item 3</div>
        </NavbarDropdown.Item>
        <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 4: clicked!')}>
          <div>
            <FontAwesomeIcon icon={faCog} fixedWidth />
          </div>
          <div className="example1-dropdown-menu-item__spacer" />
          <div className="example1-dropdown-menu-item__text">Item 4</div>
        </NavbarDropdown.Item>
      </NavbarDropdown.CSSTransitionMenu>
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
          <Link className="menu__item" to="/example1">
            Exapmle 1
          </Link>
          <div className="menu__separator" />
          <Link className="menu__item" to="/example2">
            Exapmle 2
          </Link>
          <div className="menu__spacer" />
          <Example1Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Example1;

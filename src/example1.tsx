import React from 'react';
import { Link } from 'react-router-dom';
import FlexDropdown from 'react-flex-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import './example1.scss';

const Example1: React.FC = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="title">Example 1</div>
      </div>

      <div className="header__menu">
        <div className="menu">
          <Link to="/example1" className="menu__item">Exapmle 1</Link>
          <div className="menu__separator" />
          <Link to="/example2" className="menu__item">Exapmle 2</Link>
          <div className="menu__spacer" />
          <FlexDropdown>
            <FlexDropdown.Toggle>
              <FlexDropdown.Open className="menu__item">
                <FontAwesomeIcon icon={faCaretDown} fixedWidth />
              </FlexDropdown.Open>
              <FlexDropdown.Close className="menu__item">
                <FontAwesomeIcon icon={faCaretUp} fixedWidth />
              </FlexDropdown.Close>
            </FlexDropdown.Toggle>
            <FlexDropdown.Menu className="example1-dropdown-menu" interval="4px" align="right">
              <FlexDropdown.Item className="example1-dropdown-menu__item">Item 1</FlexDropdown.Item>
              <FlexDropdown.Item className="example1-dropdown-menu__item">Item 2</FlexDropdown.Item>
              <FlexDropdown.Item className="example1-dropdown-menu__item">Item 3</FlexDropdown.Item>
              <FlexDropdown.Item className="example1-dropdown-menu__item">Item 4</FlexDropdown.Item>
            </FlexDropdown.Menu>
          </FlexDropdown>
        </div>
      </div>
    </div>
  );
};

export default Example1;

import React from 'react';
import { Link } from 'react-router-dom';
import FlexDropdown from 'react-flex-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import './example2.scss';

const Example2: React.FC = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="title">Example 2</div>
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
                <FontAwesomeIcon icon={faBars} fixedWidth />
              </FlexDropdown.Open>
              <FlexDropdown.Close className="menu__item">
                <FontAwesomeIcon icon={faTimes} fixedWidth />
              </FlexDropdown.Close>
            </FlexDropdown.Toggle>
            <FlexDropdown.Menu className="example2-dropdown-menu" interval="4px" align="right">
              <FlexDropdown.Container className="example2-dropdown-menu__row">
                <FlexDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'lightblue' }}
                >
                  Item 1
                </FlexDropdown.Item>
                <FlexDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'lightgreen' }}
                >
                  Item 2
                </FlexDropdown.Item>
              </FlexDropdown.Container>
              <FlexDropdown.Container className="example2-dropdown-menu__row">
                <FlexDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'orange' }}
                >
                  Item 3
                </FlexDropdown.Item>
                <FlexDropdown.Item
                  className="example2-dropdown-menu__item"
                  style={{ backgroundColor: 'greenyellow' }}
                >
                  Item 4
                </FlexDropdown.Item>
              </FlexDropdown.Container>
            </FlexDropdown.Menu>
          </FlexDropdown>
        </div>
      </div>
    </div>
  );
};

export default Example2;

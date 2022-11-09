import React from 'react';
import { Logo } from '../components/Logo';

const Header = (props) => {
  const changeTheme = () => {
    props.onThemeToggle();
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Logo />
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <div className="switch">
              <label>
                Dark
                <input type="checkbox" onClick={changeTheme} />
                <span className="lever"></span>
                Light
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };

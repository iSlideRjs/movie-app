import React from 'react';
import { Logo } from '../components/Logo';

class Header extends React.Component {
  changeTheme = () => {
    this.props.onThemeToggle();
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Logo />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <div className="switch">
                <label>
                  Dark
                  <input type="checkbox" onClick={this.changeTheme} />
                  <span className="lever"></span>
                  Light
                </label>
              </div>
            </li>
            <li>
              <a href="https://github.com/iKHVRV" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export { Header };

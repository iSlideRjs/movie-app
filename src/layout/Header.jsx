import React from 'react';

class Header extends React.Component {
  changeTheme = () => {
    this.props.onThemeToggle();
  };

  render() {
    return (
      <nav
        className={
          this.props.theme === 'dark' ? 'grey darken-4' : 'teal darken-2'
        }
      >
        <div className="nav-wrapper">
          <a
            href="/"
            className={
              this.props.theme === 'dark'
                ? 'brand-logo-dark'
                : 'brand-logo-light'
            }
          >
            Movies App
          </a>
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

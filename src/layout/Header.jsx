import React from 'react';

class Header extends React.Component {
  state = {};

  changeTheme = () => {
    this.props.onThemeToggle()
  };

  render() {
    return (
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo deep-purple-text text-darken-1">
            Movies App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a>
                <i
                  className="material-icons"
                  onClick={this.changeTheme}
                >
                  autorenew
                </i>
                {this.props.theme}
              </a>
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

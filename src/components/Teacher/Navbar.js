import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import colors from '../../globalSCSS/color.scss';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <i
              className="fa fa-tint"
              aria-hidden="true"
              style={{
                color: `${colors.colorWhite}`,
                fontSize: '30px',
                margin: '10px',
              }}
            />
            <div className="title" style={{ fontSize: '35px' }}>
                            Océane
            </div>
          </div>
          <form className="form-inline">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/enseignant">
                  <div className="link">Tableau de bord</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/enseignant/explication">
                  <div className="link">Guide</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/enseignant/propose">
                  <div className="link">Proposer des créneaux de rendez-vous</div>
                </Link>
              </li>
            </ul>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;

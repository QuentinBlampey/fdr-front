import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

class FooterStop extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-bottom navbar-light bg-light"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Link to="/exit/">
            <button type="submit" className="btn btn-danger">
                            Arrêter l'évaluation
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
export default FooterStop;

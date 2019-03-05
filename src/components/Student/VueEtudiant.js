import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from '../../config';
import './VueEtudiant.scss';

class VueEtudiant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      pseudos: [],
    };
  }

  componentDidMount() {
    axios.get(`${url}/api/users/`).then((res) => {
      this.setState({ pseudo: '', pseudos: res.data });
    });
  }

    onChange = (e) => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
    };

    onSubmit = (e) => {
      e.preventDefault();

      const pseudo = this.state.pseudo;

      if (pseudo !== '') {
        axios.post(`${url}/api/users/initget`, { pseudo }).then((result) => {
          this.props.history.push(`/begin/${result.data._id}`);
        });
      }
    };

    render() {
      const { pseudo, pseudos } = this.state;
      return (
        <div className="text-center component">
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3>Inscris-toi ici</h3>
                <form onSubmit={this.onSubmit}>
                  <input
                    type="email"
                    className="form-control"
                    name="pseudo"
                    value={pseudo}
                    onChange={this.onChange}
                    placeholder="nom@exemple.com"
                  />
                  <button type="submit" className="sign">
                                    Me connecter
                  </button>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default VueEtudiant;

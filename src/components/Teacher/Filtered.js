import React, { Component } from 'react';
import axios from 'axios';
import FicheCourte from './FicheCourte';
import url from '../../config';
import './Filtered.scss';

class Filtered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.post(`${url}/api/users/filter`, this.props).then((res) => {
      this.setState({ users: res.data });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      axios.post(`${url}/api/users/filter`, this.props).then((res) => {
        this.setState({ users: res.data });
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="filters">
          {this.props.filter.map(filter => (
            <div key={filter} className="filter">
              {' '}
              {filter}
              {' '}
            </div>
          ))}
        </div>
        <div className="sorts">
          {this.props.sortScore.map(sort => (
            <div key={sort} className="sort">
              {' '}
              {sort}
              {' '}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2> Étudiants </h2>
        </div>
        <div className="container-fiches box">
          {this.state.users.map(user => (
            <FicheCourte key={user._id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default Filtered;

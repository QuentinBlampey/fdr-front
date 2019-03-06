import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import url from '../../config';
import variables from '../../globalSCSS/color.scss';
import RadialChart from './Profils';
import Repartition from './Repartition';
import Filtered from './Filtered';

class VueEnseignant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      pseudos: [],
      filter:'pseudo',
      profils: ['Employés', 'Sportifs', 'Handicapés', 'Artistes'],
      profilsName: ['employe', 'athlete', 'disabled', 'artist'],
      proportions: [0, 0, 0, 0],
      colors: [variables.graph1, variables.graph2, variables.graph3, variables.graph4],
      updateFilter:this.updateFilter.bind(this), 
  }
    };

  componentDidMount() {
    axios.post(`${url}/api/stats/profils`, { profils: this.state.profilsName })
      .then((res) => {
        this.setState({ proportions: res.data.proportions });
      });
    axios.get(`${url}/api/users/`).then((res) => {
      this.setState({ pseudo: '', pseudos: res.data });
    });
  }

  updateFilter(filter) {
    console.log(filter);
    this.setState({filter : filter});
    console.log(this.state.filter);
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="jumbotron-heading">Aide à la réussite</h1>
        <div className="row">
          <div className="col-9">
            <div className="row text-center">
              <button type="button" className="btn btn-primary" style={{width:'100%'}} onClick={this.updateFilter.bind(this, 'pseudo')}>Afficher la liste complète</button>
            </div>
            <div className="row">
              <div className="col-6">
                <RadialChart updateFilter={this.state.updateFilter} parent={this} profils= {this.state.profils} profilsName = {this.state.profilsName} proportions={this.state.proportions} colors={this.state.colors}></RadialChart>
              </div>
              <div className="col-6">
                <Repartition updateFilter={this.state.updateFilter}></Repartition>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Filtered filter={this.state.filter} style={{maxWidth:'80%'}}></Filtered>
          </div>
        </div>
      </div>
    );
  }
}

export default VueEnseignant;

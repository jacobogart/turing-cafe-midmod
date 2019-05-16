import React, { Component } from 'react';
import { fetchReservations } from './api/fetchReservations';
import ResyContainer from './ResyContainer';
import ResyForm from './ResyForm';
import { fetchDeleteResy } from './api/fetchDeleteResy';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
    
  }
  
  componentDidMount() {
    fetchReservations()
    .then(reservations =>
      this.setState({ reservations }))
    .catch(error => this.setError(error))
  }

  addNewResy = (resy) => {
    this.setState({
      reservations: [...this.state.reservations, resy]
    });
  }

  setError = (error) => {
    this.setState({ error })
  }

  deleteResy = id => {
    console.log(id);
    fetchDeleteResy(id).then(reservations =>
      this.setState({ reservations })
    );
  }
  
  render() {
    const { reservations, error } = this.state
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        {error && <p className="error-msg">{error}</p>}
        <ResyForm addNewResy={this.addNewResy} setError={this.setError} />
        <ResyContainer reservations={reservations} deleteResy={this.deleteResy}/>
      </div>
    );
  }
}

export default App;

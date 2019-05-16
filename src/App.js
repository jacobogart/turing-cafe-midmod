import React, { Component } from 'react';
import { fetchReservations } from './api/fetchReservations';
import ResyContainer from './ResyContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
    
  }
  
  componentDidMount() {
    fetchReservations().then(reservations =>
      this.setState({ reservations })
    );
  }
  
  render() {
    const { reservations } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <ResyContainer reservations={reservations}/>
      </div>
    )
  }
}

export default App;

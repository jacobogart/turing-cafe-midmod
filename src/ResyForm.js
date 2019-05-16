import React, { Component } from 'react'

export default class ResyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    
  }
  
  render() {
    return (
      <form className="ResyForm">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
        />
        <input
          type="text"
          name="date"
          placeholder="Date (MM/DD)"
          value={this.state.date}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
        />
        <input
          type="number"
          name="number"
          placeholder="Number of guests"
          value={this.state.number}
        />
        <input
          type="submit"
          value="Make Reservation"
          className="submit-btn"
        />
      </form>
    );
  }
}

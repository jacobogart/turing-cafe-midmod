import React, { Component } from 'react'
import { fetchAddReservation } from './api/fetchAddReservation';

export default class ResyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
      error: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    fetchAddReservation(this.state)
      .then(newResy => this.props.addNewResy(newResy))
      .catch(error => this.props.setError(error))
  }
  
  render() {
    return (
      <form 
        className="ResyForm"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
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

import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import model from '../../models/requests'
import { withRouter } from 'react-router-dom'


export class FlightForm extends Component {
  state = {
    flight: 'ua 32',
    date: '20181210'
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formatDate = (date) => {
    let year = date.slice(0, 4)
    let month = date.slice(4, 6)
    let day = date.slice(6)
    let res = year + month + day
    return res
  }

  check = (flight) => {
    let result = {}
    if (flight.length > 0 && flight.includes(' ')) {
      result.airline = flight.split(' ')[0]
      result.num = parseInt(flight.split(' ')[1])
    } else if (flight.length > 0 && !flight.includes(' ')) {
      let numIdx
      for (let i = 0; i < flight.length; i++) {
        if (typeof (flight[i]) === 'number') {
          numIdx = i
          break
        }
      }
      result.airline = flight.slice(0, numIdx)
      result.num = parseInt(flight.slice(numIdx))
    }
    return result
  }

  onSubmit = async (event) => {
    event.preventDefault()
    let airinfo = this.check(this.state.flight)
    let airline = airinfo.airline
    let flightNum = airinfo.num
    let date = this.formatDate(this.state.date)

    console.log('airinfo', airinfo, 'airline', airline, 'flightNum', flightNum, 'date', date)
    const res = await model.getFlightInfo(airline, flightNum, date)

    let flNum = this.state.flight
    let airport = res.FLSDepartureCode
    let departTime = res.FLSDepartureDateTime

    this.props.history.push({
      pathname: '/flight/match',
      search: `?flightNum=${flNum}&date=${date}&airport=${airport}&departTime=${departTime}`
    })

    this.setState({
      flight: '',
      date: ''
    })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <div className='ui form'>
          <div className='inline field'>
            <input type="text" placeholder="Flight Number" name='flight' className='form_input' onChange={this.onChange} />
            is departing on
        </div>
          <div className='inline field'>
            <input type="text" placeholder="date." name='date' className='form_input' onChange={this.onChange} />
          </div>
          <button className='ui button oki_btn'>Okay</button>
        </div>
      </Form>
    )
  }
}

export default withRouter(FlightForm);

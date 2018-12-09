import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'



export class Form extends Component {
  constructor(props) {
    state = {
      flight: 'Flight 789',
      date: 'Dec 10'
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    
    this.props.history.push(`/profiles/${this.state.username}`)
    this.setState({
      username: '',
      avatar: '',
      email: ''
    })
  }



  render() {
    <div className='ui form'>
      <div className='inline field'>
        <input type="text" placeholder="Flight Number" className='form_input' />
        is departing on
      <input type="text" placeholder="date." className='form_input' />
      </div>
    </div>
  }
}

export default Form;


import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import TimeCard from './TimeCard'
import model from '../../models/requests'
import './time.css'
import commute from './assets/commute.png'
import checkin from './assets/checkin.png'
import security from './assets/security.png'
import airplane from './assets/airplane_bk.png'

class TimeList extends Component {
  state = {
    time: 30
  }

  async componentDidMount() {
    const time = await model.timeToAirport('Universal Studio Hollywood', 'LAX')
    this.setState({
      time: time.duration
    })
  }

  render() {
    // in the future, create a form to ask for origin + destination
    let cards = [{
      id: 1,
      title: "TO AIRPORT",
      img: commute,
      time: this.state.time // to be filled 
    }, {
      id: 2,
      title: "TO CHECK-IN",
      img: checkin,
      time: 60
    }, {
      id: 3,
      title: "TO SECURITY",
      img: security,
      time: 60 // use time series later
    }, {
      id: 4,
      title: "TO GATE",
      img: airplane,
      time: 5
    }]

    return (
      <Grid centered className="cards">
        <Grid.Column className="time_cards">
          {
            cards.map(el => {
              return <TimeCard key={el.id} img={el.img} title={el.title} time={el.time} />
            })
          }
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimeList 

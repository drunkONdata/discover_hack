import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import TimeCard from './TimeCard'
import model from '../../models/requests'

class TimeList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    // in the future, create a form to ask for origin + destination
    const time = model.timeToAirport('Universal Studio Hollywood', 'LAX').duration
    let cards = [{
      id: 1,
      title: "TO AIRPORT",
      img: "https://placeimg.com/150/200/any",
      time
    }, {
      id: 2,
      title: "TO CHECK-IN",
      img: "https://placeimg.com/150/200/any",
      time: 60
    }, {
      id: 3,
      title: "TO SECURITY",
      img: "https://placeimg.com/150/200/any",
      time: 60
    }, {
      id: 4,
      title: "TO GATE", 
      img: "https://placeimg.com/150/200/any",
      time: 5
    }]

    console.log('cards', cards)
    return (
      <Grid centered class="cards">
        <Grid.Column>
          {
            cards.map(el => {
                return <TimeCard key={el.id} title={el.title} pic={el.img} time={el.time} />
              })            
          }
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimeList 

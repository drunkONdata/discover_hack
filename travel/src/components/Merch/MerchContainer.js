import React, { Component } from 'react';
import { Card, Image, Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import model from '../../models/requests'
import './styles/styles.css';

export class MerchContainer extends Component {
  state = {
    flightNumber:'UA 32',
    departureTime: "2018-12-10T10:40:00"
  }

  // async componentDidMount(){
  //   const res = await model.getFlightInfo('ua', 32)
  //   this.setState({
  //     ...this.state,
  //     departureTime: res.FLSDepartureDateTime
  //   })
  // }

  render(){
    console.log(this.props)
    const categories = ['Offers', 'Hotels', 'Restaurants', 'Retail', 'Attractions']
    var cardList = categories.map((category)=>
    {
        return (
        <Card className='merchCards' onClick={()=>
          this.props.history.push({
            pathname: '/todo',
            search: `?type=${category}`
          })
        }>
          <Image src='https://www.discover.com/applications/homepage/images/cashback-match.png' />
            <Card.Content>
              <Card.Header>{category}</Card.Header>
            </Card.Content>
        </Card>)
    })

    return (
      <Segment id="MerchContainer">
        {cardList}
      </Segment>
    );
  }
}
export default withRouter(MerchContainer);

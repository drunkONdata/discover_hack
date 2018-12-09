import React, { Component } from 'react';
import { Card, Image, Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import model from '../models/requests'

export class ToDo extends Component {
  state = {
    type:null,
    merchantData: []
  }

  async componentDidMount(){
    var type = this.props.history.location.search.slice(6);
    var merchData;
    if(type!=='Offers'){
      merchData = await model.getMerchantInfo('los angeles', type)
    } else {
      merchData = await model.getOfferInfo(34, -118, 20)
    }
    this.setState({
      ...this.state,
      type,
      merchantData : merchData.resp
    })
  }

  render(){
    var merchList = ((this.state.type!=='Offers')? this.state.merchantData.map((merch)=>{
      return (
      <Card>
        <Card.Header>{merch.name}</Card.Header>
        <Card.Meta>{merch.phone}</Card.Meta>
        <Card.Description>{merch.address1}</Card.Description>
      </Card>
    )}) : this.state.merchantData.map((merch)=>{
      return (
      <Card>
        <Image src={merch.images} />
        <Card.Header>{merch.merchant_name}</Card.Header>
        <Card.Meta>Distance: {merch.distance}</Card.Meta>
        <Card.Description>{merch.name}</Card.Description>
      </Card>
    )})
  )

    return (
      <Grid centered>
        <Grid.Row>
          <h3>Discover</h3>
        </Grid.Row>
        <Grid.Row>
          <h2>{this.state.type}</h2>
        </Grid.Row>
        {
          merchList
        }
      </Grid>
    );
  }
}


export default ToDo;

import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import model from '../models/requests'

export class ToDo extends Component {
  state = {
    type:null,
    merchantData: null
  }

  async componentDidMount(){
    var type = this.props.history.location.search.slice(6);
    var merchData = await model.getMerchantInfo('los angeles', type)
    this.setState({
      ...this.state,
      type,
      merchantData : merchData
    })
  }

  render(){
    return (
      <Grid centered>
        <Grid.Column stretched computer={14} mobile={14}>
          {this.state.type}
        </Grid.Column>
      </Grid>
    );
  }
}


export default ToDo;

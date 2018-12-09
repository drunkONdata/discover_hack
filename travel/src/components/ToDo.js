import React, { Component } from 'react';
import { Sidebar, Icon, Menu, Card, Image, Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import model from '../models/requests'

export class ToDo extends Component {
  state = {
    type:null,
    merchantData: [],
    visible:false
  }

  handleHideClick = () => this.setState({ ...this.state, visible: false })
  handleShowClick = () => this.setState({ ...this.state, visible: true })
  handleSidebarHide = () => this.setState({ ...this.state, visible: false })

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
    const { visible } = this.state

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
      <div>
          <Button disabled={visible} onClick={this.handleShowClick}>
            <Icon name='bars' />
          </Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/'
              })
            }>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/',
                search: `?`
              })
            }>
              Flight Information
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/todo',
                search: `?type=Offers`
              })
            }>
              Offers
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/todo',
                search: `?type=Retail`
              })
            }>
              Retail
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/todo',
                search: `?type=Restaurants`
              })
            }>
              Restaurants
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/todo',
                search: `?type=Hotels`
              })
            }>
              Hotels
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>
              this.props.history.push({
                pathname: '/todo',
                search: `?type=Attractions`
              })
            }>
              Attractions
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}


export default ToDo;

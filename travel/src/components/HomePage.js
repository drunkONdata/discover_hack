import React, { Component } from 'react';
import { Sidebar, Button, Form, Grid, Segment, Label, Menu, Icon } from 'semantic-ui-react'
import TimeList from './time/TimeList'
import FlightInfo from './FlightInfo/FlightInfo'
import MerchContainer from './Merch/MerchContainer'

const noMarginStyle = {
  margin: '0px'
}
const marginTopStyle = {
  'margin-top': '20px'
}

export class HomePage extends Component {
  state = {
    visible:false
  }

  handleHideClick = () => this.setState({ ...this.state, visible: false })
  handleShowClick = () => this.setState({ ...this.state, visible: true })
  handleSidebarHide = () => this.setState({ ...this.state, visible: false })


  render(){
    const { visible } = this.state

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
              <Grid.Column stretched computer={14} mobile={14}>
                <FlightInfo />
                <TimeList />
                <div style={marginTopStyle}>
                  <h3 style={noMarginStyle}>What's Around</h3>
                  <h2 style={noMarginStyle}>Discovery Partners</h2>
                </div>
                <MerchContainer />
              </Grid.Column>
            </Grid>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}


export default HomePage;

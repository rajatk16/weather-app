import React, { Component } from 'react'
import Axios from 'axios';
import {Form, Label, Input, Button, Message} from 'semantic-ui-react';

export default class WeatherForm extends Component {
  state = {
    city: '',
    humidity: '',
    pressure: '',
    temp: '',
    description: '',
    lng: '',
    lat: ''
  }
  componentDidMount() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            lng: position.coords.longitude.toFixed(2),
            lat: position.coords.longitude.toFixed(2)
        })
      })
    }
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    const Api_Key = '7ea1c4a185b31c17e887c460554bf363'
    const {data} = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${Api_Key}`)
    const {main} = data;
    this.setState({
      humidity: main.humidity,
      pressure: main.pressure,
      temp: main.temp,
      description: data.weather[0].description
    })
  }

  renderMessage() {
    if (!this.state.pressure) {
      return (
        <Message header="Please enter a city name"/>
      )
    }
    return (
      <Message>
        <Message.Header>
          {this.state.city} ({this.state.description})
        </Message.Header>
        <Message.List>
          <Message.Item>
            Pressure: {this.state.pressure}
          </Message.Item> 
          <Message.Item>
            Humidity: {this.state.humidity}
          </Message.Item> 
          <Message.Item>
            Temperature: {(this.state.temp - 273).toFixed(2)} °C
          </Message.Item> 
        </Message.List>
      </Message> 
    )
  }

  render() {
    return (
      <div style={{marginTop: "20px"}}>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <Label horizontal>
              City
            </Label>
            <Input 
              type="text" 
              name="city" 
              placeholder="City" 
              onChange={(event) => this.setState({city: event.target.value})}
              value={this.state.city}
            />
          </Form.Field>
          <Button type="submit">Get Weather</Button>
        </Form>
        {this.renderMessage()}
      </div>
    )
  }
}

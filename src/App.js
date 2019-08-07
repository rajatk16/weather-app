import React, {Component} from 'react'
import Heading from './components/Heading';
import WeatherForm from './components/WeatherForm';
import { Container } from 'semantic-ui-react';

export default class App extends Component {
  // async componentDidMount() {
  //   const Api_Key = '7ea1c4a185b31c17e887c460554bf363'
  //   const {data} = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${Api_Key}`)
  //   console.log(data);
  // }
  render() {
    return (
      <Container>
        <Heading/>
        <WeatherForm/>
      </Container>
    )
  }
} 
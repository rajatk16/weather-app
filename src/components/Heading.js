import React, { Component } from 'react'
import {Header} from 'semantic-ui-react';

export default class Heading extends Component {
  render() {
    return (
      <div style={{marginTop: "20px"}}>
        <Header as="h1">Weather App</Header>
      </div>
    )
  }
}

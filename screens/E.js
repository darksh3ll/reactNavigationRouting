import React, { Component } from 'react';
import FlexContainer from '../components/FlexContainer'
import { Text, Button } from 'react-native';

export default class A extends Component {
  render() {
    return (
      <FlexContainer >
        <Text style={{ fontSize: 44, color: "#6b52ae" }}>E</Text>
        <Button
          color="#24292e"
          title="return to Home"
          onPress={() => this.props.navigation.popToTop()}
        />
      </FlexContainer>
    )
  }
}

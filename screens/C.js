import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text } from 'react-native';

export default class A extends Component {
  render() {
    return(
      <FlexContainer onPress={()=> this.props.navigation.navigate('D')} >
      <Text style={{fontSize:44,color:"orange"}}>C</Text>
        </FlexContainer>
    )
  }
}

import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text } from 'react-native';

export default class A extends Component {
  render() {
    return(
        <FlexContainer onPress={()=> this.props.navigation.navigate('C')} >
              <Text style={{fontSize:44,color:"#6b52ae"}}>B</Text>
        </FlexContainer>
    )
  }
}

import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text,TouchableOpacity } from 'react-native';

export default class A extends Component {
  render() {
    return(
        <FlexContainer onPress={()=> this.props.navigation.push('B')}>
            <Text style={{fontSize:44,color:"#6b52ae"}}>A</Text>
        </FlexContainer>
    )
  }
}

import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text,TouchableOpacity } from 'react-native';

export default class A extends Component {
  render() {
    return(
        <FlexContainer onPress={()=> this.props.navigation.navigate('B')}>
            <Text style={{fontSize:44,color:"orange"}}>A</Text>
        </FlexContainer>
    )
  }
}

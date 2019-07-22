import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text,TouchableOpacity } from 'react-native';

export default class One extends Component {
  render() {
    return(
        <FlexContainer onPress={()=> this.props.navigation.navigate('Two')}>
            <Text style={{fontSize:44,color:"#6b52ae"}}>1</Text>
        </FlexContainer>
    )
  }
}

import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text,TouchableOpacity } from 'react-native';

export default class Three extends Component {
  render() {
    return(
        <FlexContainer onPress={()=> this.props.navigation.navigate('Four')}>
            <Text style={{fontSize:44,color:"#6b52ae"}}>3</Text>
        </FlexContainer>
    )
  }
}

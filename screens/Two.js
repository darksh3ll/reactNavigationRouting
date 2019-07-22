import React, { Component } from 'react';
import FlexContainer from  '../components/FlexContainer'
import { Text,TouchableOpacity } from 'react-native';

export default class Two extends Component {
  render() {
    return(
        <FlexContainer onPress={()=> this.props.navigation.navigate('Three')}>
            <Text style={{fontSize:44,color:"#6b52ae"}}>2</Text>
        </FlexContainer>
    )
  }
}

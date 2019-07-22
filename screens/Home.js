import React, { Component } from 'react';
import FlexContainer from '../components/FlexContainer'
import { View,Text,Image } from 'react-native';

// import { Container } from './styles';

export default class screens extends Component {
  render() {
    return (
    <FlexContainer onPress={() => this.props.navigation.navigate('A')}>
       <Text style={{fontSize:24,color:'#6b52ae'}}>Learning</Text>
    <Image
     style={{width: 200, height: 200}}
          source={require('../assets/icon.png')}
        />

        <Text style={{fontSize:24,color:'#6b52ae',textAlign:'center'}}>Routing and navigation for your React Native apps</Text>
    </FlexContainer>
        )
  }
}

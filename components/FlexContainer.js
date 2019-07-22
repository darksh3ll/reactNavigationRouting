import React from 'react';
import { View,StyleSheet,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    }
})
export default function components(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        {props.children}
    </TouchableOpacity>
  );
}

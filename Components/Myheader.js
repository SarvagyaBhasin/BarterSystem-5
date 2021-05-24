import React,{Component} from 'react';
import {Header, Icon, Badge} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import { patchWebProps } from 'react-native-elements/dist/helpers';
const Myheader = props=>{
    return(
        <Header
        leftComponent={<Icon name='bars' type='font-awesome' color='#393939' onPress={()=>{props.navigation.toggleDrawer()}}/>}
        centerComponent={{text:props.title, style:{color:'#90a5a9', fontSize:20, fontWeight:'bold'}}}
        backgroundColor='#eaf8fe'
        />
    )
}
export default Myheader
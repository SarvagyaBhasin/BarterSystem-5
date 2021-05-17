import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native'
import DonateScreen from '../Screens/DonateScreen'
import RequestScreen from '../Screens/RequestScreen'

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{screen:DonateScreen,
    navigationOptions:{tabBarIcon:<Image source={require("assets/request-list.png")} style={{width:20, height:20}}></Image>,
    tabBarLabel:"donate books"}},
    RequestBooks:{screen:RequestScreen,
        navigationOptions:{tabBarIcon:<Image source={require("assets/request-book.png")} style={{width:20, height:20}}></Image>,
        tabBarLabel:"request books"}}
});
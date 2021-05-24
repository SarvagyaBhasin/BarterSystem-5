import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MyDonationScreen from '../Screens/MyDonationScreen.js';
import SettingsScreen from '../Screens/SettingsScreen';
import { AppTabNavigator } from './AppTabNavigator';
import Sidebar from './Sidebar';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Mydonations:{screen:MyDonationScreen},
    Setting:{screen:SettingsScreen}
},
{contentComponent:Sidebar},
{initialRouteName:'Home'}
)
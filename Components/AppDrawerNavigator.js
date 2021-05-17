import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingsScreen from '../Screens/SettingsScreen';
import { AppTabNavigator } from './AppTabNavigator';
import Sidebar from './Sidebar';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:AppTabNavigator}, 
    Setting:{screen:SettingsScreen}
},
{contentComponent:Sidebar},
{initialRouteName:'Home'}
)
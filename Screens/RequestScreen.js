import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import Myheader from '../Components/Myheader';
import db from '../Config';
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class RequestScreen extends Component{
    constructor(){
        super();
        this.state={
            userID:firebase.auth().currentUser.email,
            objectName:'',
            Reason:''
        }
    }
    createUniqueID(){
        return Math.random().toString(36).substring(7);
    }
    addrequest=(objectName, Reason)=>{
        var userID=this.state.userID;
        var requestID=this.createUniqueID();
        db.collection('requestedObject').add({
            "userID":userID,
            "requestID":requestID,
            "objectName":objectName,
            "Reason":Reason
        })
        this.setState({bookName:'', Reason:''});
        Alert.alert("Object Requested successfully")
    }
    render(){
        return(
          <SafeAreaProvider>
            <View style={{flex:1}}>
                <Myheader title="Request Object" navigation={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <TextInput style={styles.formTextInput}
                    placeholder={"ObjectName"}
                    onChangeText={(text)=>{this.setState({bookName:text})}}
                    value={this.state.bookName}
                    />
                     <TextInput
                    placeholder={"reason"}
                    onChangeText={(text)=>{this.setState({Reason:text})}}
                    value={this.state.Reason}
                    />
                    <TouchableOpacity
           style={styles.button}
           onPress = {()=>{
             this.addrequest(this.state.bookName, this.state.Reason)
           }}
           >
           <Text style={styles.buttonText}>Request</Text>
         </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
            </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })
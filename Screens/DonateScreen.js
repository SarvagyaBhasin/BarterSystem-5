import React,{Component}from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements'
import Myheader from '../Components/Myheader';
import db from '../Config';
import firebase from 'firebase';

export default class Donate extends Component{
    constructor(){
        super();
        this.state={requestList:[]}
        this.requestRef=null
    }
    getRequestList=()=>{
        this.requestRef=db.collection("requestedBooks").onSnapshot((snapshot)=>{
            var requestList=snapshot.docs.map(doc=>doc.data());
            this.setState({
                requestList:requestList
            })
        })
    }
    componentDidMount(){
        this.getRequestList();

    }
    componentWillUnmount(){
        this.requestRef=null
    }
    keyExtractor=(item, index)=>index.toString()
    renderItem=({item, i})=>{
        return(
            <ListItem
            key={i}
            title={item.bookName} 
            subtitle={item.Reason}
            titleStyle={{color:'blue', fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'white'}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }
    render(){
        return(
         <View style={{flex:1}}>
             <Myheader title="DonateBooks" navigation={this.props.navigation}></Myheader>
             <View style={{flex:1}}>
                 {
                     this.state.requestList.length==0?(
                         <View style={styles.container}>
                             <Text style={{fontSize:20}}>List of all books requested</Text>
                         </View>
                     ):(
                         <FlatList
                         keyExtractor={this.keyExtractor}
                         data={this.state.requestList}
                         renderItem={this.renderItem}
                         />
                     )
                 }
             </View>
         </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      fontSize:20
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
      width:100,
      height:30,
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
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const ForgotPassword = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <SafeAreaView>
      
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <View> 
    <View style={{marginTop:60}} ><Ionicons name="arrow-back-sharp" size={45} color="black" />
     </View>
     </View>
    </TouchableOpacity>
    <View style={{marginLeft:20}}>
      <Text style={{fontSize:20,fontSize:35, marginTop:40, fontWeight:"bold" }}>Forgot Password</Text>
      <Text style={{marginTop:10, fontSize:20, color:"#C4C9D6", fontWeight:"bold"}}>We've sent a verification code to +62 128 3972849</Text>
    </View>
    <View>
    <Text style={{fontWeight:"350", fontSize:23, marginTop:30, marginLeft:20}}>Phone Number</Text>
    <TextInput 

        placeholder="Enter your number"
        onChangeText={handleInputChange}
        value={inputValue}
        style={{ borderWidth: 1, borderColor: 'blue', padding: 15, margin: 12, borderRadius: 8, fontSize: 16 }}
      />
    </View>
    <View style={{marginTop:300}}>
    
      {/**Login Section Starts*/}
      <TouchableOpacity 
     
      onPress={() => navigation.navigate("Reset Password")}
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3D5BF6",
          padding: 20,
          borderRadius: 60,
         
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Send Code</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default ForgotPassword
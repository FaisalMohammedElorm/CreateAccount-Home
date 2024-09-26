import { View, Text, TextInput, Button, StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
const WelcomeScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

 
  return (
    <View style={{ marginLeft:20}}>
    <View style={{marginTop:78}} ><Ionicons name="arrow-back-sharp" size={45} color="black" /></View>

    <View style={{marginLeft:20}}>
    <Text style={{fontSize:35, marginTop:30  }}>Welcome to Homelyn</Text>
    <Text style={{marginTop:30, fontSize:20, color:"#C4C9D6"}}>Let's create your account first</Text>
    
    </View>
    
    <View>
    {/** Form input starts*/}
<Text style={{fontWeight:"350", fontSize:23, marginTop:60, marginLeft:20}}>Full Name</Text>
    <TextInput 
    
        placeholder="Enter your username"
        onChangeText={handleInputChange}
        value={inputValue}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 12, borderRadius: 8, fontSize: 16 }}
      />
<Text style={{fontWeight:"350", fontSize:23, marginTop:10, marginLeft:20}}>Phone Number</Text>
    <TextInput 

        placeholder="Enter your number"
        onChangeText={handleInputChange}
        value={inputValue}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 12, borderRadius: 8, fontSize: 16 }}
      />
<Text style={{fontWeight:"350", fontSize:23, marginTop:10, marginLeft:20}}>Password</Text>
    <TextInput 
    
        placeholder="Enter your password"
        onChangeText={handleInputChange}
        value={inputValue}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 12, borderRadius: 8, fontSize: 16 }}
      />
      






      {/** Form input ends*/}




      
    </View>
      <View style={{marginTop:200, marginRight:20}}>
      {/**Button Section */}
      <TouchableOpacity 
      onPress={() => navigation.navigate("Verification")}
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
        <Text style={{ color: "white", fontWeight: "bold" }}>Agree and Continue</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems: "center",}}>
      <Text style={{marginBottom:500}}>Have an account? <TouchableOpacity onPress={() => navigation.navigate("Log In")}><Text style={{color:"blue"}}>Login</Text></TouchableOpacity></Text>
      </View>
    </View>
  )
}


export default WelcomeScreen
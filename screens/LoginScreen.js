import { View, Text, TextInput, Button, StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

 
  return (
    <View style={{ marginLeft:20}}>
    <View style={{marginTop:78}} ><Ionicons name="arrow-back-sharp" size={45} color="black" /></View>

    <View style={{marginLeft:20}}>
    <Text style={{fontSize:35, marginTop:30  }}>Welcome to Homelyn</Text>
    <Text style={{marginTop:30, fontSize:20, color:"#C4C9D6", fontWeight:"bold"}}>Please login to your account</Text>
    
    </View>
    
    <View>
    {/** Form input starts*/}

<Text style={{fontWeight:"350", fontSize:23, marginTop:70, marginLeft:20}}>Phone Number</Text>
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
    <View>
      {/** Forgot Password*/}
      <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft:250}}>
        <Text style={{color:"blue", fontWeight:"bold"}}>Forgot Password?</Text>
      </View>
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
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:70, marginRight:20}}>
      {/**Button Section */}
      <TouchableOpacity 
      onPress={() => navigation.navigate("Verification")}
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C4C9D6",
          padding: 20,
          borderRadius: 60,
        
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Or login with</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:80, marginRight:20}}>
      {/**Button Section */}
      <TouchableOpacity 
      onPress={() => navigation.navigate("Verification")}
        style={{
          position: "absolute",
          bottom: 60,
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 60,
        
        }}
      >
      <AntDesign name="google" size={24} color="black" style={{ marginRight: 100 }}/>
        <Text style={{ color: "black", fontWeight: "bold", marginBottom:10, fontSize:16 }}>Google</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}


export default LoginScreen
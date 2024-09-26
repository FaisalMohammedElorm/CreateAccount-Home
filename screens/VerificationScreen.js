import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Verification = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Ionicons name="arrow-back-sharp" size={45} color="black" />
        </View>
      </TouchableOpacity>

      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20, marginRight: 100 }}>
        <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 20 }}>Verify Your Account</Text>
        <Text style={{ marginTop: 20, fontSize: 17, color: "#C4C9D6", flexDirection: "row", fontWeight: "bold" }}>
          We've sent verification code to
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>+62 128 3972849</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View>
        {/**Verification Code */}
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 60, marginLeft: 20 }}>Verification Code</Text>
        <TextInput
          placeholder="Resend in 2:14"
          placeholderTextColor="gray"
          onChangeText={handleInputChange}
          value={inputValue}
          style={{ borderWidth: 1, borderColor: 'gray', padding: 16, margin: 12, borderRadius: 8, fontSize: 16, textAlign: 'right' }}
          
        />
          <View style={{marginTop:400, marginRight:20, marginLeft:20}}>
      {/**Button Section */}
      <TouchableOpacity
       
      onPress={() => navigation.navigate("Log In")}
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
        <Text style={{ color: "white", fontWeight: "bold" }}>Verify Account</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems: "center",}}>
      <Text style={{marginBottom:500}}>Didn't receive the code? Resend</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Verification;

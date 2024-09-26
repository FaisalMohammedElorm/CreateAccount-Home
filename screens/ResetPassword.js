import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  return (
    <SafeAreaView>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <View style={{ marginTop: 40 }}>
        <Ionicons name="arrow-back-sharp" size={45} color="black" />
      </View>
    </TouchableOpacity>
      
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontSize: 35, marginTop: 40, fontWeight: "bold" }}>Create New Password</Text>
        <Text style={{ marginTop: 10, fontSize: 20, color: "#C4C9D6", fontWeight: "bold" }}>Enter the phone number, we'll send the code.</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 23, marginTop: 30, marginLeft: 20 }}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true} 
          style={{ borderWidth: 1, borderColor: 'blue', padding: 15, margin: 12, borderRadius: 8, fontSize: 16 }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 23, marginTop: 30, marginLeft: 20 }}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm your password"
          onChangeText={handleConfirmPasswordChange}
          value={confirmPassword}
          secureTextEntry={true} 
          style={{ borderWidth: 1, borderColor: 'blue', padding: 15, margin: 12, borderRadius: 8, fontSize: 16 }}
        />
      </View>
      <View style={{marginTop:200}}>
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
       <Text style={{ color: "white", fontWeight: "bold" }}>Reset Password</Text>
     </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default ResetPassword;

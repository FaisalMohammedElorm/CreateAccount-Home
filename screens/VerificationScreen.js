import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
const Verification = ({navigation}) => {
  return (
    <SafeAreaView>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <View style={{marginTop:30, marginLeft:20}} ><Ionicons name="arrow-back-sharp" size={45} color="black" /></View>
    </TouchableOpacity>
    
    <View style={{alignItems: "center", justifyContent:"center", marginTop:20, marginRight:80}}>
    <Text style={{fontSize:35, marginTop:30,marginLeft:20}}>Verify Your Account</Text>
    <Text style={{marginTop:20, fontSize:17, color:"#C4C9D6", flexDirection:"row"}}>We've sent verification code to +62 128 3972849</Text>
    </View>

      <View>
{/**Verification Code */}

      </View>
    </SafeAreaView>
  )
}

export default Verification
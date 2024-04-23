import { View, Text, SafeAreaView, ScrollView , FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Ionicons } from '@expo/vector-icons';



const notificationScreen = () => {
  return (
    <SafeAreaView style={{marginHorizontal:wp("5px")}}>
      <ScrollView className="space-y-10" >
        {/*notification header* */}
        <View className="flex flex-row items-center justify-between" style={{marginTop:wp("6px"), marginBottom:wp("8px")}}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={wp("7px")} color="black" />
          </TouchableOpacity>

          <View>
            <Text className="text-lg font-semibold">Notification</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="settings-outline" size={wp("7px")} color="black" />
          </TouchableOpacity>
        </View>
        {/*messages view* */}
        <View style={{marginBottom:wp("5px")}}>
          <View className="flex flex-row items-center justify-between" style={{marginBottom:wp("10px")}}>
            <View className="flex flex-row items-center space-x-1">
              <Text className="font-bold text-lg">Recent</Text>
              <View className="bg-[#FF4747] p-1 rounded-full">
                <Text className="text-white text-[10px] font-bold">
                  {notificationmockData.length}
                </Text>
              </View>
            </View>
            {/*Mark all read section* */}
            <View>
              <Text className="text-[#3F6DF6] font-semibold text-md">Mark All Read</Text>
            </View>
          </View>
          {/**Message list */}
          <View>
            <FlatList
              data={notificationmockData}
              keyExtractor={(item) =>item.id.toString}
              renderItem={({item}) => (
                <View className="flex flex-row space-x-2" >
                  <View>
                    <Image source={item.image}/>
                  </View>
                  <View style={{width:wp("75%")}}>
                    <View className="flex flex-row justify-between items-center">
                      <Text className="font-semibold ">{item.title}</Text>
                      <Text className="text-xs text-[#A7AEC1]">{item.time}</Text>
                    </View>
                    <View>
                      <Text className="text-xs text-[#A7AEC1]">{item.message}</Text>
                    </View>
                  </View>
                </View>
              )}
              contentContainerStyle={{rowGap:wp("5px")}}
            />
          </View>
        </View>
      </ScrollView>
        
    
    </SafeAreaView>
  )
}

export default notificationScreen

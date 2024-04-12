import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React from 'react'
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import recommendedMockData from './src/mockData/recommendedmockData';
import nearbymockData from './src/mockData/nearbymockData';




const homeScreen = () => {
  return (
    <SafeAreaView className="flex-1 " style={{ marginHorizontal: wp("5px"), gap: wp("10px")}}>

      <View className="flex flex-row justify-between items-center " style={{paddingTop:wp("5px")}}>
        <View className="flex flex-row items-center space-x-2  bg-gray-100 rounded-lg" style={{padding:wp("1.5px")}}>
          <MaterialIcons name="location-on" size={wp("6px")} color={"#3F6DF6"} />
          <Text> Purwokerto, IND</Text>
          <AntDesign name="down" size={wp("3px")} color={"#3F6DF6"} />
        </View>
        <TouchableOpacity>
          <View className="relative right-3.5">
            <Ionicons name="notifications-outline" size={wp("6px")} color="black"  />
          </View>
          <View className="bg-[#FF4747] p-1.5 rounded-full absolute"></View>
          
        </TouchableOpacity>
      </View>
      <View >
        <Text className="text-xm text-[#A7AEC1] pb-2">Hello, Rita! 👋</Text>
        <Text className="text-3xl font-semibold">Let’s find best hotel</Text>
      </View>
      <View className="flex-row items-center border-none  bg-gray-100  rounded-full pl-5" style={{padding:wp("3px")}}>
      <AntDesign name="search1" size={wp("6px")} color={"#A7AEC1"} className="pl-7" />
        <TextInput 
          className="pl-5" 
          placeholder='Search hotel'
        />
      </View>
      <View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg text-[#151B33] font-semibold">
            Recomended Hotel
          </Text>
          <Text className="text-xs text-[#3F6DF6]">
            See All
          </Text>
        </View>
        <View>
          <FlatList
            data={recommendedMockData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <View className="border-none rounded-md bg-gray-100">
                <View >
                  <View className="relative ">
                    <Image source={item.image}/>
                  </View>
                  <View className="absolute bg-[#151B33] right-3.5 rounded-lg p-1 top-1">
                    <Text className="text-white">
                      {item.cost}
                    </Text>
                  </View>
                </View>
                <View className="border-b-2 border-b-gray-200">
                  <Text className="text-sm font-semibold p-2">{item.hotelName}</Text>
                  <Text  className="text-[#A7AEC1] text-xs pb-2 ">{item.location}</Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center">
                    <MaterialCommunityIcons name="bed-queen-outline" size={wp("4px")} color={"#3F6DF6"} />
                    <Text className="p-2">{item.bed}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <AntDesign name="wifi" size={wp("4px")} color={"#3F6DF6"} />
                    <Text className="p-2">{item.wifi}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <MaterialIcons name="sports-gymnastics" size={wp("4px")} color={"#3F6DF6"} />
                    <Text className="p-2">{item.gym}</Text>
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={{columnGap: wp("5px")}}
            horizontal
          />
        </View>
      </View>
      <View>
        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-[#151B33] font-semibold">Nearby Hotels</Text>
          <Text className="text-xs text-[#3F6DF6]">See All</Text>
        </View>
        <View>
            <FlatList
              data={nearbymockData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <View className="flex-row">
                  <View>
                    <Image source={item.image} />
                  </View>
                  <View className="p-2">
                    <Text className="font-bold">{item.hotelName}</Text>
                    <Text className="text-xs text-[#A7AEC1]">{item.location}</Text>
                    <View className="flex-row items-center justify-between space-x-5">
                      <View className="flex-row">
                        <Text className="text-xs text-[#3F6DF6]">{item.cost}</Text>
                        <Text className="text-xs text-[#A7AEC1]">{item.time}</Text>
                      </View>
                      <View className="flex-row space-x-1 items-center ">
                        <AntDesign name="star" size={wp("3px")} color={"#FFBA55"} />
                        <Text className="font-bold">{item.rating}</Text>
                        <Text className="text-xs text-[#A7AEC1]">{item.reviews}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              contentContainerStyle={{rowGap: wp("5px")}}
            />
        </View>
      </View>
      
      


    </SafeAreaView>
  )
}

export default homeScreen
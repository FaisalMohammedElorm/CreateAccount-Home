import { View, Text, SafeAreaView, ScrollView , FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign,Entypo } from '@expo/vector-icons';
import reviewmockData from './src/mockData/reviewmockDta';

const reviewScreen = () => {
  return (
    <SafeAreaView style={{marginHorizontal:wp("5px")}}>
      {/**review head */}
      <View className="flex flex-row items-center justify-between" style={{marginBottom:wp("8px"), marginTop:wp("5px")}}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={wp("7px")} color="black" />
        </TouchableOpacity>

        <View>
         <Text className="text-lg font-semibold">Review</Text>
        </View>

        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={wp("7px")} color="black" />
        </TouchableOpacity>
      </View>
      {/** hotel details and reviews */}
      <ScrollView className="space-y-10">
        <View className="flex-row">
          <View>
            <Image source={require("../CreateAccount-Home/assets/images/hotelreviewPic.png")} />
          </View>
          <View className="p-2">
            <Text className="font-bold">Diamond Heart Hotel</Text>
            <Text className="text-xs text-[#A7AEC1]">Purwokerto, Karang Lewas</Text>
          <View className="flex-row items-center justify-between space-x-5">
          <View className="flex-row">
            <Text className="text-xs text-[#3F6DF6]">$46</Text>
            <Text className="text-xs text-[#A7AEC1]">/Night</Text>
          </View>
          <View className="flex-row space-x-1 items-center ">
            <AntDesign name="star" size={wp("3px")} color={"#FFBA55"} />
            <Text className="font-bold">4.6</Text>
            <Text className="text-xs text-[#A7AEC1]">(142 Reviews)</Text>
          </View>
        </View>
                    </View>
                  </View>
        {/**reviews */}
        <View >
            <FlatList
              data={reviewmockData}
              keyExtractor={(item) =>item.id.toString}
              renderItem={({item}) => (
                <View className="flex flex-row space-x-2" >
                  <View>
                    <Image source={item.image}/>
                  </View>
                  <View style={{width:wp("75%")}}>
                    <View className="flex flex-row justify-between items-center">
                      <View>
                        <Text className="font-semibold ">{item.profileName}</Text>
                      </View>
                      <View className="flex-row space-x-1 items-center">
                        <AntDesign name="star" size={wp("3px")} color={"#FFBA55"} />
                        <Text className="text-sm font-semibold ">{item.rating}</Text>
                      </View>
                      
                    </View>
                    <View>
                      <Text className="text-xs text-[#A7AEC1]">{item.message}</Text>
                    </View>
                  </View>
                </View>
              )}
              contentContainerStyle={{rowGap:wp("5px"), marginTop:wp("5px")}}
            />
          </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default reviewScreen
import { View, Text , Image, ScrollView , TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons ,FontAwesome6, Fontisto, MaterialCommunityIcons , AntDesign} from '@expo/vector-icons';
import mainReviewMock from './src/mockData/mainReviewMock';

const DetailsScreen = () => {
  return (
    <View className="flex-1 w-full" >
      <ScrollView>
        <View className="space-y-3">
          {/**image and navigation on it */}
          <View className="relative">
            <Image style={{width: ("100%"), height: wp("90")}} source={require('./assets/images/detail.png')} />
          </View>
          <TouchableOpacity className="absolute top-20 items-center rounded-full m-3  border-none bg-[#151b3330] justify-center"style={{left:wp("7"),width:wp("12"), height:wp("12")}}>
            <Ionicons name="arrow-back-sharp" size={wp('8')} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="absolute top-20 bg-red w-25 items-center rounded-full m-3  border-none bg-[#151b3330]  justify-center" style={{right:wp("20"),width:wp("12"), height:wp("12")}}>
            <Ionicons name="share-outline" size={wp('8')} color="white" />                
          </TouchableOpacity>
          <TouchableOpacity className="absolute top-20 items-center rounded-full m-3  border-none bg-[#151b3330] justify-center " style={{right:wp("5"),width:wp("12"), height:wp("12")}}>
            <Ionicons name="heart-outline" size={wp('8')} color='white' />
          </TouchableOpacity>
   
        </View>
        <View style={{marginHorizontal: wp("5px"), marginTop: wp("4px") ,gap:wp("3px")}}>
          <Text className=" text-2xl font-semibold">Diamond Heart Hotel</Text>
          <View className=" flex flex-row justify-between" >
            <View className=" flex flex-row space-x-2 items-center">
              <FontAwesome6 name="location-dot" size={wp('4')} color={"#3F6DF6"} />
              <Text className="text-[#A7AEC1]">Purwokerto, Karang Lewas</Text>
            </View>
            <View className=" flex flex-row items-center">
              <Fontisto name="star" size={wp('4')} color={"#FFBA55"} />
              <Text className=" font-bold"> 4.6</Text>
              <Text className="text-[#A7AEC1]">(142 Reviews)</Text>
            </View>
            
          </View>
          <View>
            <Text className="text-[#3F6DF6]">$46 <Text className="text-[#A7AEC1]"> Per Night</Text></Text>
          </View>
          <View  >
            <Text className="text-[#A7AEC1]">
              Diamond Heart Hotel is high rated hotels in Middle Java Purwokerto with 120+ reviews and have high attitude service...<Text className=" text-[#3F6DF6] font-semibold"> Read More</Text>
            </Text>
            
          </View>
          <View className=" flex flex-row justify-between"  >
            <View className="items-center">
              <Ionicons name="wifi-outline" size={wp('7')} color="black" />
              <Text className="text-[#A7AEC1]">Wifi</Text>
            </View>
            <View className="items-center">
              <MaterialCommunityIcons name="shower" size={wp('7')} color="black" />
              <Text className="text-[#A7AEC1]">Shower</Text>
            </View>
            <View className="items-center">
              <FontAwesome6 name="utensils" size={wp('7')} color="black" />
              <Text className="text-[#A7AEC1]">Breakfast</Text>
            </View>
            <View className="items-center">
            <FontAwesome6 name="dumbbell" size={wp('7')} color="black" />
            <Text className="text-[#A7AEC1]">Gym</Text>
            </View>
          </View>
          <View className=" flex flex-row justify-between items-center" style={{marginTop:wp("7px")}}>
            <Text className="text-lg font-semibold">Location</Text>
            <Text className=" text-[#3F6DF6] ">View Detail</Text>
          </View>
          <View  className="border-none rounded-md bg-gray-100" >
            <Image source={require("./assets/images/map.png")} style={{width:('100%'), height:wp("33")}} className=" rounded-3xl "/>
            <View className=" p-4" style={{gap:wp("5px")}}>
              <View className=" flex flex-row space-x-2 items-center">
                <FontAwesome6 name="location-dot" size={wp('4')} color={"#3F6DF6"} />
                <Text className="text-[#A7AEC1]">Haight Streetm Purwokerto, Karang Lewas</Text>
              </View>
              <TouchableOpacity>
                <Text className=" text-[#3F6DF6] ">View Details</Text>
              </TouchableOpacity>
              
            </View>

          </View>
          <View className=" flex flex-row justify-between items-center" style={{marginTop:wp("7px")}}>
            <Text className="text-lg font-semibold">Reviews</Text>
            <TouchableOpacity>
              <Text className=" text-[#3F6DF6] ">See All</Text>
            </TouchableOpacity>
            
          </View>
          <View >
            <FlatList
              data={mainReviewMock}
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
          <View className=" flex flex-row justify-between items-center" style={{marginTop:wp('7px')}} >
            <TouchableOpacity className="  items-center rounded-full m-3 border border-solid border-[#3F6DF6] justify-center" style={{width:wp("12"), height:wp("12")}}>
              <MaterialCommunityIcons name="message-minus" size={wp('7')} color={"#3F6DF6"} />
            </TouchableOpacity>
            <TouchableOpacity className="  rounded-full m-3  border-none bg-[#3F6DF6] justify-center items-center" style={{width:wp("50"), height:wp("12")}} >
              <Text className="text-white font-bold text-md">Book Now</Text>
            </TouchableOpacity>
          </View>

        </View>
        
      </ScrollView>
      
    </View>
  )
}

export default DetailsScreen;

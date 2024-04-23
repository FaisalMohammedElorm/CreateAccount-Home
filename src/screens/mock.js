import { View, Text, FlatList } from 'react-native'
import React from 'react'
import recommendedMockData from '../mockData/recommendedmockData'

const mock = () => {
  return (
    <FlatList
        data={recommendedMockData}
        keyExtractor={({hotel}) => hotel.id.toString()} 
        renderItems= {({hotel}) => (
            <View>
                <View>
                {/**image and cost */}
                    <View>
                        <Image source={hotel.image}/>
                    </View>
                    <View>
                        <Text> {hotel.cost}</Text>
                    </View>
                </View>
            </View>
        )}
    />
  )
}

export default mock
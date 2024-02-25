import { View,
     Text,
      SafeAreaView,
      StatusBar,
    Image } from "react-native";
import React, { useEffect } from "react";
const dp=require('../images/pics/file.jpg')
const HomeScreen = () => {
  return (
    <SafeAreaView className="justify-center">
        <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition='fade'
        
      />
      <View className="flex-row justify-between items-center py-3 px-5 bg-white">
        <Text className="text-xl">Hello, Iris</Text>
        <Image source={dp} className="h-10 w-10 rounded-full"></Image>
      </View>
      <View className="h-40 w-40 bg-yellow-500">
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}; 

export default HomeScreen;

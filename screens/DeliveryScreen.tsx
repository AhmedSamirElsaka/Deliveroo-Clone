import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import { Image } from "react-native";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home" as never)}
          >
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-light">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20 "
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 30.033333,
          longitude: 31.233334,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 30.033333,
            longitude: 31.233334,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="red"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-24">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-12 h-12  bg-gray-300 p-4 rounded-full ml-5"
        />

        <View className="flex-1">
          <Text className="text-lg">John Doe</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

<View>
  {/* This view is used to add a gap between the top of the screen and the bottom of the screen */}
</View>;
const styles = StyleSheet.create({});

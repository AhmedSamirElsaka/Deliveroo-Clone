import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import Categories from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import React, { useState, useEffect, useLayoutEffect } from "react";
import client from "@/sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [FeaturedCategories, setFeaturedCategories] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"]{
      ...,
     
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <View className="flex-row pb-3 items-center mx-4 space-x-3">
        <Image
          //   source={require("../assets/images/favicon.png")}
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full "
        />

        <View className="flex-1">
          <Text className="text-gray-400 font-bold text-xs">Deliver Now </Text>
          <Text className="text-xl font-bold ">
            Current location
            <Icons.ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <Icons.UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row bg-gray-200  space-x-2 p-3 flex-1 ">
          <Icons.MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <Icons.AdjustmentsHorizontalIcon size={35} color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100 flex-1"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <Categories />

        {FeaturedCategories?.map((category) => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

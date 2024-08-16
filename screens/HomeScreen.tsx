import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          //   source={require("../assets/images/favicon.png")}
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View>
          <Text className="text-gray-400 font-bold text-xs">Deliver Now </Text>
          <Text className="text-xl font-bold">Current location </Text>
          <Icons.ChevronDownIcon size={20} color="#00CCBB" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

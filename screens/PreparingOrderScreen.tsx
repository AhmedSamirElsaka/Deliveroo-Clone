import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <StatusBar hidden={true} />
      <Animatable.Image
        source={require("../assets/images/deliveroo-order.gif")}
        className="h-96 w-96"
        animation="slideInUp"
        iterationCount={1}
      />

      <Animatable.Text
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
        iterationCount={1}
      >
        Waiting For Restaurant To Accept Your Order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});

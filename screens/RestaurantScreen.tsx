import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute() as {
    params: {
      id: string;
      imgUrl: string;
      title: string;
      rating: number;
      genre: string;
      address: string;
      short_description: string;
      dishes: any[];
      long: number;
      lat: number;
    };
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});

interface RouteParams extends RouteProp<ParamListBase> {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: any[];
  long: number;
  lat: number;
}

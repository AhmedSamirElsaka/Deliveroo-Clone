import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RestaurantCard = ({
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
}: {
  id: string;
  imgUrl: string;
  title: string;
  rating: string;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: number;
  lat: number;
}) => {
  return (
    <View>
      <Text>RestaurantCard</Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});

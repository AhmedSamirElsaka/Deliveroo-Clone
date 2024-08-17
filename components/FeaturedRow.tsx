import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FeaturedRow = ({
  title,
  description,
  featuredCategory,
}: {
  title: string;
  description: string;
  featuredCategory: string;
}) => {
  return (
    <View>
      <Text>FeaturedRow</Text>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});

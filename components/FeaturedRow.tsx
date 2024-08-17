import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";

const FeaturedRow = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <Icons.ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});

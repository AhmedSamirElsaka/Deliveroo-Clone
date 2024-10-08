import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "@/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "@/features/basketSlice";
const DishRow = ({
  id,
  name,
  description,
  price,
  image,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const itemsSelector = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!(itemsSelector.length > 0)) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                size={40}
                disabled={itemsSelector.length}
                color={itemsSelector.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{itemsSelector.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

const styles = StyleSheet.create({});

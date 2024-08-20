import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard, { Category } from "./CategoryCard";
import client, { urlFor } from "@/sanity";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imageUrl={urlFor(category.image).width(200).url().toString()}
          title={category.name}
        />
      ))}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imageUrl={urlFor(category.image).width(200).url().toString()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});

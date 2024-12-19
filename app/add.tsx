import { View, TextInput, Button } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useItems } from "../context/ItemsContext";
import { router } from "expo-router";
import React from "react";

export default function AddScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { addItem } = useItems();

  useFocusEffect(
    useCallback(() => {
      setName("");
      setPrice("");
    }, [])
  );

  const handleSubmit = () => {
    addItem({
      name,
      price: parseFloat(price),
      purchaseDate: new Date(),
      icon: "🍎",
    });
    router.back();
  };

  return (
    <View className="flex-1 p-4">
      <TextInput
        className="h-10 border border-gray-300 rounded-lg mb-4 px-2"
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="h-10 border border-gray-300 rounded-lg mb-4 px-2"
        placeholder="Price"
        placeholderTextColor="#999"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleSubmit} />
    </View>
  );
}

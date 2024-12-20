import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useItems } from "../context/ItemsContext";
import { router } from "expo-router";
import React from "react";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function AddScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(dayjs());
  const { addItem } = useItems();

  useFocusEffect(
    useCallback(() => {
      setName("");
      setPrice("");
      setDate(dayjs());
    }, [])
  );

  const handleSubmit = () => {
    addItem({
      name,
      price: parseFloat(price),
      purchaseDate: date.toDate(),
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
      <View className="mb-4">
        <DateTimePicker
          mode="single"
          date={date}
          onChange={(params) => params.date && setDate(dayjs(params.date))}
        />
      </View>

      <Button title="Add Item" onPress={handleSubmit} />
    </View>
  );
}

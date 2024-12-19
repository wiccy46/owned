import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { useItems } from "../context/ItemsContext";
import { router } from 'expo-router';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

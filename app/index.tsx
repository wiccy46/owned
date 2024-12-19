import { Text, View, FlatList } from "react-native";
import { Settings } from "../constants/Settings";
import { useItems } from "../context/ItemsContext";
import React from "react";

export default function HomeScreen() {
  const { items } = useItems();

  return (
    <View className="flex-1 p-4">
      {items.length === 0 ? (
        <Text className="text-center mt-5 text-base text-gray-600">
          No items yet. Add one!
        </Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-4 bg-white rounded-lg mb-3 shadow-sm">
              <Text className="text-lg font-bold mb-1">{item.name}</Text>
              <Text>
                {Settings.currencyIcon}
                {item.price}
              </Text>
              <Text>{item.purchaseDate.toLocaleDateString()}</Text>
              <Text>{item.icon}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ItemsProvider } from "../context/ItemsContext";

export default function RootLayout() {
  return (
    <ItemsProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: "Add",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </ItemsProvider>
  );
}

import React from "react";
import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Type for TabIcon component props
type TabIconType = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

// Tab Icon Component with Tailwind Styling
const TabIcon = ({ icon, color, name, focused }: TabIconType) => {
  return (
    <View className="items-center justify-center pt-2">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        style={{ tintColor: color }}
      />
      <Text
        className={`${focused ? "font-semibold" : "font-regular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

// Floating Action Button (FAB) centered in the bottom navigation
const FloatingActionButton = () => {
  return (
    <TouchableOpacity
      className="absolute bottom-14 self-center w-16 h-16 bg-violet rounded-full items-center justify-center shadow-lg"
      onPress={() => console.log("FAB Pressed")}
    >
      <Ionicons name="add" size={28} color="white" />
    </TouchableOpacity>
  );
};

// Main Tab Layout with Floating Action Button
const TabsLayout = () => {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#7F3DFF",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#FCFCFC",
            height: 90,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/home.png")}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="transaction"
          options={{
            headerShown: false,
            title: "Transaction",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/transaction.png")}
                color={color}
                name="Transaction"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="budget"
          options={{
            headerShown: false,
            title: "Budget",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/budget.png")}
                color={color}
                name="Budget"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/profile.png")}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </View>
  );
};

export default TabsLayout;

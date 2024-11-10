import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/navigation/TabBar";
import {
  Image,
  ImageSourcePropType,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TabIconType = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconType) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.iconImage, { tintColor: color }]}
      />
      <Text
        style={[
          styles.iconText,
          focused ? styles.iconTextFocused : styles.iconTextRegular,
          { color },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

// Custom FAB button positioned in the center of the bottom tab
const FloatingActionButton = () => {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => console.log("FAB Pressed")}
    >
      <Ionicons name="add" size={28} color="white" />
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  return (
    <View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  iconText: {
    fontSize: 10,
  },
  iconTextFocused: {
    fontFamily: "font-psemibold",
  },
  iconTextRegular: {
    fontFamily: "font-pregular",
  },
  fab: {
    position: "absolute",
    bottom: 45, // Positioned slightly above the tab bar
    alignSelf: "center",
    backgroundColor: "#7F3DFF", // Adjust FAB color here
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/onboarding");
    }, 300);
  });
  return (
    <SafeAreaView className="flex-1 bg-violet h-full items-center justify-center">
      <Text className="text-white  text-5xl font-inter700">montra</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/form/FormField";
import Buttton from "@/components/Buttton";
import { router } from "expo-router";
import { hp } from "@/helpers/common";

const Sent = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="w-full h-full p-4 mt-12 gap-12">
        <View className="flex items-center justify-center p-6">
          <Image
            source={require("../../assets/illustrations/email.png")}
            resizeMode="contain"
            style={{ width: hp(30), height: hp(30), resizeMode: "contain" }}
          />
        </View>
        <View className="gap-5">
          <Text className="text-2xl font-inter600 text-center">
            Your email is on the way
          </Text>
          <Text className="text-lg  text-center">
            Check your email test@test.com and follow the instructions to reset
            your password
          </Text>
        </View>
        <Buttton
          title="Back to Login"
          onPress={() => {
            router.replace("/auth/login");
          }}
          containerStyle="bg-violet mt-auto mb-12"
          textStyle="text-white"
        />
      </View>
    </SafeAreaView>
  );
};

export default Sent;

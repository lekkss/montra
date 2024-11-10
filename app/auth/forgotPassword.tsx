import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/form/FormField";
import Buttton from "@/components/Buttton";
import { router } from "expo-router";

const ForgotPassword = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-row items-center justify-center p-5 relative  text-dark50">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-5 top-0 bottom-0 justify-center"
        >
          <Image
            source={require("../../assets/icons/arrow-left.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-xl font-inter600 text-black">
          Forgot Password
        </Text>
      </View>
      <View className="w-full h-full p-4 mt-12 gap-12">
        <View>
          <Text className="text-3xl font-inter600">Don’t worry.</Text>
          <Text className="text-3xl font-inter600">
            Enter your email and we’ll send you a link to reset your password.
          </Text>
        </View>
        <FormField
          handleChange={() => {}}
          otherStyles=""
          text="Email"
          value=""
          placeholder="Email"
        />
        <Buttton
          title="Continue"
          onPress={() => {
            router.push("/auth/sent");
          }}
          containerStyle="bg-violet"
          textStyle="text-white"
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

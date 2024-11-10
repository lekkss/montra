import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/form/FormField";
import Buttton from "@/components/Buttton";
import { router } from "expo-router";

const Login = () => {
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
        <Text className="text-xl font-inter600 ">Login</Text>
      </View>
      <View className="w-full h-full p-4 mt-12 gap-8">
        <FormField
          handleChange={() => {}}
          otherStyles=""
          text="Email"
          value=""
          placeholder="Email"
        />
        <FormField
          handleChange={() => {}}
          otherStyles=""
          text="Password"
          value=""
          placeholder="Password"
        />
        <Buttton
          title="Login"
          onPress={() => {
            router.replace("/(tabs)");
          }}
          containerStyle="bg-violet"
          textStyle="text-white"
        />
        <Pressable onPress={() => router.push("/auth/forgotPassword")}>
          <Text className="text-center font-inter500 text-violet text-xl">
            Forgot Password?
          </Text>
        </Pressable>
        <View className="flex-row gap-2 items-center justify-center">
          <Text className="text-light20 font-inter500 text-xl">
            Don't have an account yet?
          </Text>
          <Pressable onPress={() => router.push("/auth/signup")}>
            <Text className="text-violet underline font-inter500 text-xl">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

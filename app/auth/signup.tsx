import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/form/FormField";
import Buttton from "@/components/Buttton";
import { router } from "expo-router";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-row items-center justify-center p-5 relative  text-dark50 ">
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
        <Text className="text-xl font-inter600 ">Sign Up</Text>
      </View>
      <View className="w-full h-full p-4 mt-12 gap-8 ">
        <FormField
          handleChange={() => {}}
          otherStyles=""
          text="name"
          value=""
          placeholder="Name"
        />
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
          title="Sign Up"
          onPress={() => {}}
          containerStyle="bg-violet"
          textStyle="text-white"
        />
        <Text className="text-center font-inter500 text-light20 text-lg">
          Or With
        </Text>
        <View className="flex-row gap-5">
          <Pressable
            role="checkbox"
            aria-checked={checked}
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}
          >
            {checked && <Ionicons name="checkmark" size={24} color="white" />}
          </Pressable>
          <Text className="font-inter500 text-xl">
            By signing up, you agree to the{" "}
            <Text className="text-violet">
              Terms of Service and Privacy Policy
            </Text>
          </Text>
        </View>
        <Buttton
          title="Sign Up with Google"
          onPress={() => {}}
          containerStyle="bg-white border border-[#91919F]/20"
          textStyle="text-black"
          icon={
            <Image
              source={require("../../assets/icons/flat-color-icons_google.png")}
            />
          }
        />
        <View className="flex-row gap-2 items-center justify-center">
          <Text className="text-light20 font-inter500 text-xl">
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push("/auth/login")}>
            <Text className="text-violet underline font-inter500 text-xl">
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#7F3DFF",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#7F3DFF",
  },
});

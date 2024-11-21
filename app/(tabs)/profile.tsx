import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import ProfileCard from "@/components/ProfileCard";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F6F6F6]">
      <View className="p-6 gap-10 pt-12">
        <View className="flex-row items-center justify-between">
          <View className="items-center flex-row gap-3">
            <Pressable>
              <View className="rounded-full w-24 h-24 border-2 border-violet p-1">
                <Image
                  className="w-full h-full rounded-full"
                  source={require("../../assets/images/avatar.jpeg")}
                  resizeMode="cover"
                />
              </View>
            </Pressable>
            <View className="gap-1">
              <Text className="text-light20 text-lg font-inter500">
                Username
              </Text>
              <Text className="text-black text-2xl font-inter500">
                Oluwasegun Afolabi
              </Text>
            </View>
          </View>
          <Pressable>
            <View className="w-12 h-12 items-center justify-center border border-[#F1F1FA] rounded-xl">
              <Image
                source={require("../../assets/icons/edit.png")}
                resizeMode="contain"
              />
            </View>
          </Pressable>
        </View>
        <View className="rounded-2xl bg-white">
          <ProfileCard color="violet" name="account" />
          <View className="border-gray-100 my-2 border"></View>
          <ProfileCard color="violet" name="settings" />
          <View className="border-gray-100 my-2 border"></View>
          <ProfileCard color="violet" name="export data" />
          <View className="border-gray-100 my-2 border"></View>

          <ProfileCard color="red" name="logout" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

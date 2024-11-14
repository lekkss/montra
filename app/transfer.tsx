import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Button from "@/components/Buttton";
import FormSelectInput from "@/components/form/FormSelectInput";
import CashFlowTextInput from "@/components/CashFlowTextInput";

const Transfer = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue justify-between">
      <View className="flex-row items-center justify-center p-5 relative">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-5 top-0 bottom-0 justify-center"
        >
          <Image
            source={require("../assets/icons/back-white.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-xl font-inter600 text-white">Transfer</Text>
      </View>
      <View className="gap-8 absolute bottom-0 w-full">
        <CashFlowTextInput inputValue={""} onChangeText={() => {}} />
        <View className="p-4 pt-6 pb-14 bg-white w-full rounded-t-3xl gap-5">
          {/* <View className="flex-row items-center justify-between gap-4 border-2 border-[#F1F1FA] rounded-2xl p-4 px-5">
            <Text className="font-inter500 text-lg text-light20">Category</Text>
            <Image
              source={require("../assets/icons/arrow-down-gray.png")}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </View> */}

          <View className="relative gap-2 justify-between self-center w-full flex-row">
            <FormSelectInput
              options=""
              containerClassName="flex-1"
              isDropdown={false}
              placeholder="From"
            />

            {/* Image centered between the two inputs */}
            <View className="absolute left-1/2 transform -translate-x-1/2 top-1/2  -translate-y-1/2 bg-white z-10 rounded-full border-2 border-[#F1F1FA] w-12 h-12 flex items-center justify-center">
              <Image
                source={require("../assets/icons/Transaction copy.png")}
                className="w-8 h-8"
                resizeMode="contain"
              />
            </View>

            <FormSelectInput
              options=""
              containerClassName="flex-1"
              isDropdown={false}
              placeholder="To"
            />
          </View>

          <FormSelectInput
            options=""
            isDropdown={false}
            placeholder="Description"
          />

          <View className="flex-row items-center justify-center gap-4 border-2 border-dashed border-[#F1F1FA] rounded-2xl p-4 px-5">
            <Image
              source={require("../assets/icons/attachment.png")}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="font-inter500 text-lg text-light20">
              Add attachmant
            </Text>
          </View>
          <Button
            onPress={() => {}}
            title="Continue"
            containerStyle="bg-violet mt-10"
            textStyle="text-white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transfer;

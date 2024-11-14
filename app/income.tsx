import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Button from "@/components/Buttton";
import FormSelectInput from "@/components/form/FormSelectInput";
import CashFlowTextInput from "@/components/CashFlowTextInput";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AttachmentPicker from "@/components/form/AttachmentPicker";

const Income = () => {
  return (
    <SafeAreaView className="flex-1 bg-green justify-between">
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
        <Text className="text-xl font-inter600 text-white">Income</Text>
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
          <FormSelectInput
            options={["Shopping", "Subscription", "Food"]}
            isDropdown={true}
            placeholder="Category"
          />
          <FormSelectInput
            options=""
            isDropdown={false}
            placeholder="Description"
          />
          <FormSelectInput
            options={["Paypal", "Stripe", "Revolut"]}
            isDropdown={true}
            placeholder="Wallet"
          />
          <AttachmentPicker maxImages={1} />
          <View className="justify-between flex-row items-center">
            <View className="gap-2">
              <Text className="font-inter500 text-xl">Repeat</Text>
              <Text className="font-inter500 text-lg text-light20">
                Repeat transaction
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#EEE5FF"
            />
          </View>
          <Button
            onPress={() => {}}
            title="Continue"
            containerStyle="bg-violet  mt-10"
            textStyle="text-white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Income;

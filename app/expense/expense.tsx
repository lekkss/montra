import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import Button from "@/components/Buttton";
import FormSelectInput from "@/components/form/FormSelectInput";
import CashFlowTextInput from "@/components/CashFlowTextInput";
import AttachmentPicker from "@/components/form/AttachmentPicker";
import RepeatToggle from "@/components/form/RepeatToggle";

const Expense = () => {
  const [isRepeatEnabled, setIsRepeatEnabled] = useState(false);
  const handleToggle = (value: boolean) => {
    setIsRepeatEnabled(value);
  };
  return (
    <SafeAreaView className="flex-1 bg-red justify-between">
      <View className="flex-row items-center justify-center p-5 relative">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-5 top-0 bottom-0 justify-center"
        >
          <Image
            source={require("../../assets/icons/back-white.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-xl font-inter600 text-white">Expense</Text>
      </View>
      <View className="gap-8 absolute bottom-0 w-full">
        <CashFlowTextInput inputValue={""} onChangeText={() => {}} />
        <View className="p-4 pt-6 pb-14 bg-white w-full rounded-t-3xl gap-5">
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
          <AttachmentPicker />
          <RepeatToggle isEnabled={isRepeatEnabled} onToggle={handleToggle} />
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

export default Expense;

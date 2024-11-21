import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { cashFlowData } from "@/constants/data";
import Button from "@/components/Buttton";

const DetailedTransaction = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  const fetchedData = cashFlowData.find((item) => item.id == Number(id));
  console.log(fetchedData);
  const { amount, category, description, time, type, title, wallet } =
    fetchedData!;

  return (
    <SafeAreaView className={`flex-1 relative  bg-white`}>
      <View
        className={`relative rounded-b-3xl pb-12 w-full ${
          type === "expense"
            ? "bg-red"
            : type === "income"
            ? "bg-green"
            : type === "transation"
            ? "bg-blue"
            : ""
        }`}
      >
        <View className="flex-row  items-center justify-between p-5 ">
          <TouchableOpacity
            onPress={() => router.back()}
            className="  justify-center"
          >
            <Image
              source={require("../../assets/icons/back-white.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-xl font-inter600 text-white">
            Detailed Transaction
          </Text>
          <TouchableOpacity className="  justify-center">
            <Image
              source={require("../../assets/icons/trash.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View className="gap-2 p-3">
          <Text className="text-center text-white font-inter700 text-5xl">
            ${amount}
          </Text>
          <Text className="text-center text-white text-lg font-inter500">
            {title}
          </Text>
          <Text className="text-center text-white text-base font-inter500">
            {time}
          </Text>
        </View>
      </View>
      <View className="flex-1 pt-14 relative">
        <View className="absolute -top-10  w-full">
          <View className="flex-row justify-between border-[#F1F1FA] rounded-xl  p-5 px-8 bg-white border mx-4">
            <View className="items-center">
              <Text className="text-light20 font-inter500">Type</Text>
              <Text className="text-lg font-inter600 capitalize">{type}</Text>
            </View>
            <View className="items-center">
              <Text className="text-light20 font-inter500">Category</Text>
              <Text className="text-lg font-inter600 capitalize">
                {category}
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-light20 font-inter500">Wallet</Text>
              <Text className="text-lg font-inter600 capitalize">{wallet}</Text>
            </View>
          </View>
        </View>
        <View className="flex-1 p-3 bg-white gap-3 ">
          <View className=" border border-light20 border-dashed"></View>
          <Text className="text-light20 font-inter500  text-lg">
            Description
          </Text>
          <Text className="text-lg font-inter500 ">{description}</Text>
          <Text className="text-light20 font-inter500  text-lg">Attachmet</Text>

          <Button
            onPress={() => {}}
            title="Edit"
            containerStyle="bg-violet mt-auto"
            textStyle="text-white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailedTransaction;

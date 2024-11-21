import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { CashFlowDataPropType } from "@/constants/data";
import { router } from "expo-router";
type TransactionCardPropType = {
  item: CashFlowDataPropType;
};
const TransactionCard = ({
  item: { amount, category, title, id, time, type },
}: TransactionCardPropType) => {
  return (
    <Pressable
      className="bg-[#FCFCFC] rounded-3xl p-5 flex-row justify-between"
      onPress={() => router.push(`/detailedTransaction/${id}`)}
    >
      <View className="flex-row gap-5">
        <View
          className={`${
            category == "food"
              ? "bg-red/20"
              : category == "shopping"
              ? "bg-yellow/20"
              : category == "subscription"
              ? "bg-violet/20"
              : category == "salary"
              ? "bg-green/20"
              : "bg-red"
          }  items-center justify-center rounded-2xl p-2 aspect-square`}
        >
          <Image
            className="w-fit h-fit"
            source={
              category == "food"
                ? require("../assets/icons/restaurant.png")
                : category == "shopping"
                ? require("../assets/icons/shopping-bag.png")
                : category == "subscription"
                ? require("../assets/icons/recurring-bill.png")
                : category == "salary"
                ? require("../assets/icons/salary.png")
                : ""
            }
            resizeMode="cover"
          />
        </View>
        <View className="justify-between gap-5">
          <Text className="capitalize font-inter500 text-xl">{category}</Text>
          <Text className="font-inter500 text-base text-gray-400">{title}</Text>
        </View>
      </View>
      <View className="justify-between">
        <Text
          className={`${
            type == "expense" ? "text-red" : "text-green"
          } text-xl font-inter600`}
        >
          {type == "expense" ? "-" : "+"} ${amount}
        </Text>
        <Text className="font-inter500 text-base text-gray-400">{time}</Text>
      </View>
    </Pressable>
  );
};

export default TransactionCard;

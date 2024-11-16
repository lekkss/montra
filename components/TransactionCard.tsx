import { View, Text, Image } from "react-native";
import React from "react";
import { CashFlowDataPropType } from "@/constants/data";
type TransactionCardPropType = {
  item: CashFlowDataPropType;
};
const TransactionCard = ({
  item: { amount, category, description, id, time, type },
}: TransactionCardPropType) => {
  return (
    <View className="bg-[#FCFCFC] rounded-3xl p-5 flex-row justify-between ">
      <View className="flex-row gap-5">
        <View
          className={`${
            category == "food"
              ? "bg-red/20"
              : category == "shopping"
              ? "bg-yellow/20"
              : category == "subscription"
              ? "bg-violet/20"
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
                : ""
            }
            resizeMode="cover"
          />
        </View>
        <View className="justify-between gap-5">
          <Text className="capitalize font-inter500 text-xl">{category}</Text>
          <Text className="font-inter500 text-base text-gray-400">
            {description}
          </Text>
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
    </View>
  );
};

export default TransactionCard;

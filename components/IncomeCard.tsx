import { View, Text, Image } from "react-native";
import React from "react";
type IncomeCardPropType = {
  text: string;
  amount: string;
  type: "income" | "expense";
};

const IncomeCard = ({ amount, text, type }: IncomeCardPropType) => {
  return (
    <View
      className={`${
        type == "income" ? "bg-green" : "bg-red"
      } flex-1 w-1/2 flex-row gap-4 rounded-[28] p-5 `}
    >
      <View className="bg-white items-center justify-center rounded-2xl p-2 aspect-square">
        <Image
          className="w-full h-full"
          source={
            type == "income"
              ? require("../assets/icons/income.png")
              : require("../assets/icons/expense.png")
          }
          resizeMode="contain"
        />
      </View>
      <View className="justify-between">
        <Text className="text-white text-xl font-inter600">{text}</Text>
        <Text className="text-white text-3xl font-inter600">${amount}</Text>
      </View>
    </View>
  );
};

export default IncomeCard;

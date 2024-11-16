import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { cashFlowData } from "@/constants/data";
import TransactionCard from "@/components/TransactionCard";
import { ScrollView } from "react-native-gesture-handler";

const Transaction = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <View className="p-5 gap-6">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-4 border-2 border-[#F1F1FA] rounded-full p-3 px-5">
              <Image
                source={require("../../assets/icons/arrow-down.png")}
                resizeMode="contain"
              />
              <Text className="font-inter500 text-lg">Month</Text>
            </View>
            <Pressable>
              <View className="w-12 h-12 items-center justify-center border border-[#F1F1FA] rounded-xl">
                <Image
                  source={require("../../assets/icons/sort.png")}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </View>
          <Pressable className="bg-violet/20 rounded-xl p-4 flex-row justify-between items-center">
            <Text className="font-inter400 text-xl text-violet">
              See your financial report
            </Text>
            <Image
              source={require("../../assets/icons/arrow-down.png")}
              resizeMode="contain"
              className="-rotate-90"
            />
          </Pressable>
          <Text className="font-inter600 text-3xl">Today</Text>
          <View className="pl-2 gap-3">
            {cashFlowData.map((item) => (
              <TransactionCard key={item.id} item={item} />
            ))}
          </View>
          <Text className="font-inter600 text-3xl">Yesterday</Text>
          <View className="pl-2 gap-3">
            {cashFlowData.map((item) => (
              <TransactionCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;

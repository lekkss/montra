import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import IncomeCard from "@/components/IncomeCard";
import Filters from "@/components/FIlter";
import { cashFlowData } from "@/constants/data";
import TransactionCard from "@/components/TransactionCard";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleChangeFilter = (filter: string | null) => {
    setActiveFilter(filter);
  };
  return (
    <SafeAreaView className="flex-1 bg-[#FFF6E5]">
      {/* <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="flex-1 bg-white"
      ></ScrollView> */}
      <FlatList
        data={cashFlowData}
        // ListHeaderComponentClassName="bg-white"
        ListHeaderComponent={() => (
          <View>
            <LinearGradient
              // Background Linear Gradient
              colors={[
                "rgba(255,255,255,0)",
                "rgba(255,255,255,0.5)",
                "white",
                "white",
              ]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 0.8 }}
              className="absolute  bottom-0"
              // style={styles.gradient}
            />
            <View className="gap-6 p-4 py-6 pb-10 bg-[#FFF6E5] rounded-b-[32]">
              <View className="flex-row justify-between items-center">
                <Pressable>
                  <View className="rounded-full w-16 h-16 border-2 border-violet p-1">
                    <Image
                      className="w-full h-full rounded-full"
                      source={require("../../assets/images/avatar.jpeg")}
                      resizeMode="cover"
                    />
                  </View>
                </Pressable>
                <View className="flex-row items-center gap-4 border-2 border-[#F1F1FA] rounded-full p-4 px-5">
                  <Image
                    source={require("../../assets/icons/arrow-down.png")}
                    resizeMode="contain"
                  />
                  <Text className="font-inter500">October</Text>
                </View>
                <Pressable>
                  <View className="w-16 h-16 items-center justify-center">
                    <Image
                      source={require("../../assets/icons/notifiaction.png")}
                      resizeMode="contain"
                    />
                  </View>
                </Pressable>
              </View>
              <Text className="font-inter500 text-lg text-light20 text-center">
                Account Balance
              </Text>
              <Text className="text-center font-inter600 text-4xl">$9400</Text>
              <View className="gap-3 self-center w-full flex-row">
                <IncomeCard amount="5000" text="Income" type="income" />
                <IncomeCard amount="1200" text="Expenses" type="expense" />
              </View>
            </View>
            <View className="py-8">
              <Text className="p-4 text-2xl font-inter600">
                Spend Frequency
              </Text>
              <View className="h-40 bg-gray-100" />
            </View>
            <Filters
              activeFilter={activeFilter}
              handleChangeFilter={handleChangeFilter}
            />
            <View className="justify-between flex-row items-center p-4">
              <Text className="text-2xl font-inter600">
                Recent Transactions
              </Text>
              <Pressable className=" bg-violet/20 text-violet p-3 px-6 rounded-full">
                <Text className=" text-violet font-inter500 capitalize text-lg">
                  See all
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        renderItem={({ item }) => <TransactionCard item={item} />}
        ItemSeparatorComponent={() => <View className="h-2" />}
        className="bg-white"
      />
    </SafeAreaView>
  );
};

export default Home;

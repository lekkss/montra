import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttton from "@/components/Buttton";
import OnboardingCard from "@/components/onboarding/OnboardingCard";
import { router } from "expo-router";

const OnboardingScreen = () => {
  const [current, setCurrent] = useState();
  const [page, setPage] = useState(1);
  const data = [
    {
      id: 1,
      image: require("../../assets/illustrations/gain.png"),
      header: "Gain total control of your money",
      subHeader: "Become your own money manager and make every cent count",
    },
    {
      id: 2,
      image: require("../../assets/illustrations/money.png"),
      header: "Know where your money goes",
      subHeader:
        "Track your transaction easily, with categories and financial report ",
    },
    {
      id: 3,
      image: require("../../assets/illustrations/plan.png"),
      header: "Planning ahead",
      subHeader: "Setup your budget for each category so you in control",
    },
  ];
  const displayPage = () => {
    const selectedData = data.find((item) => item.id === page);
    if (selectedData) {
      return (
        <OnboardingCard
          header={selectedData.header}
          image={selectedData.image}
          subHeader={selectedData.subHeader}
        />
      );
    }
    return null;
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="justify-center items-center gap-16 mt-5 px-12 flex-1">
        {displayPage()}
        <View className="flex-row gap-5 items-center">
          {data.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => setPage(item.id)}
              className={` rounded-full ${
                item.id == page ? "bg-violet w-6 h-6 " : "bg-violet/50 w-3 h-3"
              }`}
            />
          ))}
        </View>

        <View className="w-full gap-5 mt-auto">
          <Buttton
            title="Sign Up"
            onPress={() => {
              router.replace("/auth/signup");
            }}
            containerStyle="bg-violet"
            textStyle="text-white"
          />

          <Buttton
            title="Login"
            onPress={() => {
              router.replace("/auth/login");
            }}
            containerStyle="bg-violet/20"
            textStyle="text-violet"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

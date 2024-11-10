import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { hp } from "@/helpers/common";

type OnboardingCardPropType = {
  header: string;
  subHeader: string;
  image: ImageSourcePropType;
};

const OnboardingCard = ({
  header,
  image,
  subHeader,
}: OnboardingCardPropType) => {
  return (
    <View className="flex-1 items-center justify-center p-6">
      <View className="flex items-center justify-center p-6">
        <Image
          source={image}
          style={{ width: hp(30), height: hp(30), resizeMode: "contain" }} // Set width, height, and resize mode
        />
      </View>
      <View className="gap-6 mt-6">
        <Text className="font-inter700 text-4xl text-center text-black">
          {header}
        </Text>
        <Text className="text-[#91919F] font-inter500 text-lg text-center">
          {subHeader}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingCard;

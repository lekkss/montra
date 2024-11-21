import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

type ProfileCardType = {
  color: "red" | "violet";
  name: string;
};
const ProfileCard = ({ name, color }: ProfileCardType) => {
  return (
    <TouchableOpacity className="items-center gap-6 flex-row p-5">
      <View
        className={`${
          color == "red"
            ? "bg-red/20"
            : color == "violet"
            ? "bg-violet/20"
            : "bg-red"
        }  items-center justify-center rounded-2xl p-2 aspect-square w-16 h-16`}
      >
        <Image
          className="w-fit h-fit"
          source={
            name == "logout"
              ? require("../assets/icons/logout.png")
              : name == "account"
              ? require("../assets/icons/wallet.png")
              : name == "export data"
              ? require("../assets/icons/upload.png")
              : name == "settings"
              ? require("../assets/icons/settings.png")
              : ""
          }
          resizeMode="cover"
        />
      </View>
      <Text className="capitalize font-inter500 text-xl">{name}</Text>
    </TouchableOpacity>
  );
};

export default ProfileCard;

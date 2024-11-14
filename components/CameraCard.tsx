import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";

export const images: any = {
  "camera.png": require("../assets/icons/camera.png"),
  "gallery.png": require("../assets/icons/gallery.png"),
  "file.png": require("../assets/icons/file.png"),
};
type CameraCardPropType = {
  addImage: () => void;
  text: string;
  delay: number;
  image: string;
};
const CameraCard = ({ addImage, text, delay, image }: CameraCardPropType) => {
  return (
    <TouchableOpacity
      className="bg-violet/20 rounded-3xl w-1/3 flex-1 p-5"
      onPress={addImage}
    >
      <Animated.View
        entering={FadeInDown.delay(delay).springify().damping(11)}
        className="items-center justify-center gap-3"
      >
        <Image source={images[image]} resizeMode="contain" />
        <Text className="text-xl text-violet font-inter600">{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CameraCard;

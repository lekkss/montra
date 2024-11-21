import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

type ButtonPropType = {
  title: string;
  containerStyle?: string; // Made this optional for more flexibility
  textStyle?: string; // Made this optional
  onPress: () => void;
  loading?: boolean;
  icon?: React.ReactNode; // Added icon prop, accepts any valid React Node (component, image, etc.)
};

const Button = ({
  containerStyle = "", // Default empty string
  onPress,
  textStyle = "", // Default empty string
  title,
  loading = false,
  icon,
}: ButtonPropType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-2xl  p-5 ${containerStyle} ${
        loading ? "opacity-50" : ""
      }`} // Optional loading state
    >
      <View className="flex-row items-center justify-center">
        {icon && <View className="mr-2">{icon}</View>}
        {/* Render icon if available */}
        <Text className={`text-center text-xl font-inter600 ${textStyle}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

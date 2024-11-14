import { View, TouchableOpacity, Image, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const FloatingActionButton = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
  };

  // Rotate the main button on toggle
  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"], // Rotate 45 degrees when opened
        }),
      },
    ],
  };

  const getAnimatedStyle = (index: number) => {
    // Horizontal spacing for each icon
    const baseX = 90 * (index - 1); // Space icons horizontally (left, middle, right)
    // Higher Y value for middle icon, lower for others to create a slight curve
    const baseY = index === 1 ? -60 : index === 0 ? 80 : -30;

    const translateY = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, baseY],
    });

    const translateX = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, baseX],
    });

    return {
      transform: [{ translateX }, { translateY }],
      opacity: animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.5, 1], // Fade in as they move up
      }),
    };
  };

  const navigate = (index: number) => {
    toggleMenu();
    index == 0
      ? router.push("/income")
      : index == 1
      ? router.push("/transfer")
      : router.push("/expense");
  };

  return (
    <View className="absolute bottom-20 self-center">
      {open &&
        [...Array(3)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => navigate(index)}>
            <Animated.View
              className={`w-16 h-16 rounded-full items-center justify-center shadow-lg ${
                index === 1 ? "bg-blue" : index === 0 ? "bg-green" : "bg-red"
              }`}
              style={getAnimatedStyle(index)}
            >
              {index === 0 ? (
                <Image
                  source={require("../assets/icons/Income-white.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              ) : index === 1 ? (
                <Image
                  source={require("../assets/icons/currency-exchange.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../assets/icons/Expense-white.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              )}
            </Animated.View>
          </TouchableOpacity>
        ))}
      <TouchableOpacity
        className="absolute bottom-0 self-center w-16 h-16 bg-violet rounded-full items-center justify-center shadow-lg"
        onPress={toggleMenu}
      >
        <Animated.View style={rotation}>
          <AntDesign name="plus" size={28} color="white" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingActionButton;

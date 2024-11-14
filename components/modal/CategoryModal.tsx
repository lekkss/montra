import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { BlurView } from "expo-blur";

import Animated, {
  Extrapolation,
  FadeInDown,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type CategoryModalPropType = {
  modalRef: React.RefObject<BottomSheetModalMethods>;
  closeCategoryModal: () => void;
  handleSelectOption: (option: any) => void;
  options: any;
};

const CategoryModal = ({
  closeCategoryModal,
  handleSelectOption,
  modalRef,
  options,
}: CategoryModalPropType) => {
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
    >
      <BottomSheetView className="flex-1">
        <View className="flex-1 flex-row gap-2 p-3">
          {options &&
            options.map((item: string, index: number) => (
              <TouchableOpacity
                className="py-2 border-b border-gray-200"
                onPress={() => handleSelectOption(item)}
              >
                <Animated.View
                  entering={FadeInDown.delay(index * 100 + 100)
                    .springify()
                    .damping(11)}
                >
                  <View className="text-lg font-inter500 bg-light20 p-2 px-3 rounded-xl">
                    <Text className="text-lg font-inter500 text-white">
                      {item}
                    </Text>
                  </View>
                </Animated.View>
              </TouchableOpacity>
            ))}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

// Custom backdrop component
const CustomBackdrop = ({ animatedIndex, style }: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      opacity,
    };
  });

  const containerAnimatedStyle = [
    StyleSheet.absoluteFill,
    style,
    styles.overlay,
    animatedStyle,
  ];

  return (
    <Animated.View style={containerAnimatedStyle}>
      <BlurView style={StyleSheet.absoluteFill} tint="dark" intensity={25} />
    </Animated.View>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

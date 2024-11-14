import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useMemo } from "react";
import Animated, {
  Extrapolation,
  FadeInDown,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import CameraCard from "../CameraCard";

type AttachmentPickerModalPropType = {
  addImage: () => void;
  modalRef: React.RefObject<BottomSheetModalMethods>;
};
const AttachmentPickerModal = ({
  addImage,
  modalRef,
}: AttachmentPickerModalPropType) => {
  const snapPoints = useMemo(() => ["30%"], []);

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={snapPoints}
      backdropComponent={CustomBackdrop}
    >
      <BottomSheetView className="flex-row items-center justify-center gap-3 p-5 flex-1">
        <CameraCard
          addImage={addImage}
          text="Camera"
          delay={100}
          image="camera.png"
        />
        <CameraCard
          addImage={addImage}
          text="Image"
          delay={200}
          image="gallery.png"
        />
        <CameraCard
          addImage={addImage}
          text="Document"
          delay={300}
          image="file.png"
        />
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

export default AttachmentPickerModal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

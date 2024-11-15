import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolation,
} from "react-native-reanimated";

type CustomBottomModalProps = {
  modalRef: React.RefObject<any>;
  snapPoints: string[] | number[];
  renderContent: () => React.ReactNode;
  backdropBlurIntensity?: number;
};

const CustomBottomModal = ({
  modalRef,
  snapPoints,
  renderContent,
  backdropBlurIntensity = 25,
}: CustomBottomModalProps) => {
  const backdropComponent = ({ animatedIndex, style }: any) => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        animatedIndex.value,
        [-1, 0],
        [0, 1],
        Extrapolation.CLAMP
      );
      return { opacity };
    });

    const containerAnimatedStyle = [
      StyleSheet.absoluteFill,
      style,
      styles.overlay,
      animatedStyle,
    ];

    return (
      <Animated.View style={containerAnimatedStyle}>
        <BlurView
          style={StyleSheet.absoluteFill}
          tint="dark"
          intensity={backdropBlurIntensity}
        />
      </Animated.View>
    );
  };

  const snap = useMemo(() => snapPoints, []);

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={snap}
      backdropComponent={backdropComponent}
    >
      <BottomSheetView style={styles.contentContainer}>
        {renderContent()}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});

export default CustomBottomModal;

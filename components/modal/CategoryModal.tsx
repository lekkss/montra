import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import CustomBottomModal from "./CustomBottomModal";

type CategoryModalProps = {
  modalRef: React.RefObject<any>;
  options: string[];
  onSelect: (option: string) => void;
};

const CategoryModal = ({ modalRef, options, onSelect }: CategoryModalProps) => {
  const renderContent = () => (
    <View className="gap-2 flex-row">
      {options &&
        options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => onSelect(option)}>
            <Animated.View
              entering={FadeInDown.delay(index * 100 + 100)
                .springify()
                .damping(11)}
            >
              <View className="p-3 rounded-xl bg-light20">
                <Text className="text-lg font-inter500 text-white">
                  {option}
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
    </View>
  );

  return (
    <CustomBottomModal modalRef={modalRef} renderContent={renderContent} />
  );
};

export default CategoryModal;

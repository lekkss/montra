import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { View, Text, Switch, Pressable } from "react-native";
import RepeatModal from "../modal/RepeatModal";

type RepeatToggleProps = {
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
};

const RepeatToggle = ({ isEnabled, onToggle }: RepeatToggleProps) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [frequency, setFrequency] = useState<string | null>(null);

  // Callback to open the modal
  const openModal = useCallback(() => {
    modalRef.current?.present();
  }, []);

  // Callback to close the modal
  const closeModal = useCallback(() => {
    modalRef.current?.close();
  }, []);

  // Handle switch toggle and open modal
  const handleSwitchToggle = (value: boolean) => {
    // onToggle(value); // Update the parent state
    if (value) {
      openModal(); // Open the modal when enabling
    } else {
      onToggle(value);
      setFrequency(null);
      closeModal(); // Close the modal when disabling
    }
  };

  // Handle frequency selection from modal
  const handleFrequency = (option: string) => {
    console.log("Selected Frequency:", option);
    setFrequency(option); // Update local state with selected frequency
    onToggle(true); // Enable repeat after selection
  };

  return (
    <View className="gap-5">
      <View className="flex-row justify-between items-center">
        <View className="gap-2">
          <Text className="font-inter500 text-xl">Repeat</Text>
          <Text className="font-inter500 text-lg text-light20">
            Repeat transaction
          </Text>
        </View>
        <Switch
          trackColor={{ false: "#EEE5FF", true: "#7F3DFF" }}
          ios_backgroundColor="#EEE5FF"
          value={isEnabled}
          onValueChange={handleSwitchToggle}
        />
      </View>
      {frequency && (
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-xl font-inter500 text-black">Frequency</Text>
            <Text className="text-lg font-inter500 text-light20">
              {frequency}
            </Text>
          </View>
          <Pressable
            className="bg-violet/20 p-2 px-6 rounded-full"
            onPress={openModal}
          >
            <Text className="text-violet text-lg font-inter600">Edit</Text>
          </Pressable>
        </View>
      )}
      <RepeatModal
        frequency={frequency!}
        modalRef={modalRef}
        onHandleFrequency={handleFrequency}
        closeModal={closeModal}
      />
    </View>
  );
};

export default RepeatToggle;

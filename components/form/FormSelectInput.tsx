import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import CategoryModal from "../modal/CategoryModal";

type FormSelectInputPropType = {
  options: any;
  isDropdown: boolean;
  placeholder: string;
  containerClassName?: string;
  initialValue?: string;
  onChange?: (value: string) => void; // This should be passed from the parent to get the selected value
};

const FormSelectInput = ({
  options = [],
  isDropdown = false,
  placeholder = "Select or enter text",
  containerClassName,
  initialValue,
  onChange, // Accept the onChange prop from the parent
}: FormSelectInputPropType) => {
  const [value, setValue] = useState(initialValue || "");

  const handleSelectOption = (option: any) => {
    setValue(option); // Update the local value
    if (onChange) {
      onChange(option); // Notify the parent component about the selection
    }
    closeCategoryModal(); // Close the modal after selecting
  };

  // ref for the modal
  const modalRef = useRef<BottomSheetModal>(null);

  // callbacks to open and close the modal
  const openCategoryModal = useCallback(() => {
    modalRef.current?.present();
  }, []);
  const closeCategoryModal = useCallback(() => {
    modalRef.current?.close();
  }, []);

  return (
    <View className={`${containerClassName}`}>
      {isDropdown ? (
        <Pressable
          className={`flex-row items-center justify-between gap-4 border-2 border-[#F1F1FA] rounded-2xl p-4 px-5 `}
          onPress={openCategoryModal}
        >
          <Text
            className={`font-inter500 text-lg ${
              value ? "text-black" : "text-gray-400"
            }`}
          >
            {value || placeholder} {/* Display selected value or placeholder */}
          </Text>
          <Image
            source={require("../../assets/icons/arrow-down-gray.png")}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </Pressable>
      ) : (
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          className={`border-2 border-[#F1F1FA] rounded-2xl p-4 px-5 text-lg font-inter500 `}
          style={{ color: value ? "black" : "gray" }}
        />
      )}
      <CategoryModal
        modalRef={modalRef}
        onSelect={handleSelectOption} // Pass the selected option handler to the modal
        options={options}
      />
    </View>
  );
};

export default FormSelectInput;

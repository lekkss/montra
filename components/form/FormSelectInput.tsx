import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  Pressable,
} from "react-native";
import CategoryModal from "../modal/CategoryModal";

type FormSelectInputPropType = {
  options: any;
  isDropdown: boolean;
  placeholder: string;
  containerClassName?: string;
};

const FormSelectInput = ({
  options = [],
  isDropdown = false,
  placeholder = "Select or enter text",
  containerClassName,
}: FormSelectInputPropType) => {
  const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectOption = (option: any) => {
    setValue(option);
    setModalVisible(false);
    closeCategoryModal();
  };

  // ref
  const modalRef = useRef<BottomSheetModal>(null);
  // callbacks
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
            {value || placeholder}
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
        handleSelectOption={handleSelectOption}
        closeCategoryModal={closeCategoryModal}
        options={options}
      />
    </View>
  );
};

export default FormSelectInput;

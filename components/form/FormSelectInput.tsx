import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

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
  };

  return (
    <View className={`${containerClassName}`}>
      {isDropdown ? (
        <TouchableOpacity
          className={`flex-row items-center justify-between gap-4 border-2 border-[#F1F1FA] rounded-2xl p-4 px-5 `}
          onPress={() => setModalVisible(true)}
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
        </TouchableOpacity>
      ) : (
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          className={`border-2 border-[#F1F1FA] rounded-2xl p-4 px-5 text-lg font-inter500 `}
          style={{ color: value ? "black" : "gray" }}
        />
      )}

      {/* Dropdown Modal */}
      {isDropdown && (
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-30">
            <View className="bg-white rounded-xl w-3/4 max-h-1/2 p-4 shadow-lg">
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="py-2 border-b border-gray-200"
                    onPress={() => handleSelectOption(item)}
                  >
                    <Text className="text-lg font-inter500">{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                className="mt-4 bg-gray-300 p-2 rounded-full items-center"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-lg text-gray-600">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default FormSelectInput;

import React from "react";
import { View, Text, TextInput, StyleProp, TextStyle } from "react-native";

// Define types for the props that the component will accept
interface CashFlowTextInputProps {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  inputValue: string;
  onChangeText: (text: string) => void;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const CashFlowTextInput: React.FC<CashFlowTextInputProps> = ({
  label = "How Much?",
  placeholder = "$0",
  placeholderTextColor = "white",
  inputValue,
  onChangeText,
  inputStyle,
  labelStyle,
}) => {
  return (
    <View className="px-4 gap-6">
      {/* Label */}
      <Text className={`text-[#FCFCFC] font-inter500 text-2xl ${labelStyle}`}>
        {label}
      </Text>

      {/* Text Input */}
      <TextInput
        value={inputValue}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        className={`text-7xl text-white font-inter700 ${inputStyle}`}
      />
    </View>
  );
};

export default CashFlowTextInput;

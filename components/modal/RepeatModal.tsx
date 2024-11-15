import { View, Text } from "react-native";
import React, { useState } from "react";
import FormSelectInput from "../form/FormSelectInput";
import CustomBottomModal from "./CustomBottomModal";
import Button from "../Buttton";
type RepeatModalProps = {
  frequency: string;
  modalRef: React.RefObject<any>;
  onHandleFrequency: (option: string) => void;
  closeModal: () => void;
};
const RepeatModal = ({
  frequency,
  modalRef,
  closeModal,
  onHandleFrequency,
}: RepeatModalProps) => {
  const [selectedFrequency, setSelectedFrequency] = useState<string>("");
  const handleNext = () => {
    onHandleFrequency(selectedFrequency); // Pass value to parent
    closeModal(); // Close the modal
  };
  const renderContent = () => (
    <View className="gap-5">
      <FormSelectInput
        options={["Yearly", "Monthly", "Weekly"]}
        isDropdown={true}
        placeholder="Frequency"
        onChange={setSelectedFrequency}
        initialValue={frequency}
      />
      <FormSelectInput options="" isDropdown={true} placeholder="End After" />
      <Button
        onPress={handleNext}
        title="Next"
        containerStyle="bg-violet  mt-5"
        textStyle="text-white"
      />
    </View>
  );

  return (
    <CustomBottomModal
      modalRef={modalRef}
      renderContent={renderContent}
      snapPoints={["35%"]}
    />
  );
};
export default RepeatModal;

import React, { useRef } from "react";
import { View } from "react-native";
import CustomBottomModal from "./CustomBottomModal";
import CameraCard from "../CameraCard";
type AttachmentPickerModalProps = {
  modalRef: React.RefObject<any>;
  addImage: (type: string) => void;
};

const AttachmentPickerModal = ({
  modalRef,
  addImage,
}: AttachmentPickerModalProps) => {
  const renderContent = () => (
    <View className=" flex-1 flex-row items-center justify-center gap-3">
      <CameraCard
        addImage={() => addImage("camera")}
        text="Camera"
        delay={100}
        image="camera.png"
      />
      <CameraCard
        addImage={() => addImage("gallery")}
        text="Image"
        delay={200}
        image="gallery.png"
      />
      <CameraCard
        addImage={() => addImage("document")}
        text="Document"
        delay={300}
        image="file.png"
      />
    </View>
  );

  return (
    <CustomBottomModal
      modalRef={modalRef}
      renderContent={renderContent}
      snapPoints={["30%"]}
    />
  );
};

export default AttachmentPickerModal;

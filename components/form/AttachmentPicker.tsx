import React, { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import AttachmentPickerModal from "../modal/AttachmentPickerModal";
import { Ionicons } from "@expo/vector-icons";

type AttachmentPickerProps = {
  maxImages?: number;
};

const AttachmentPicker = ({ maxImages = 5 }: AttachmentPickerProps) => {
  // ref
  const modalRef = useRef<BottomSheetModal>(null);
  // callbacks
  const openPickerModal = useCallback(() => {
    modalRef.current?.present();
  }, []);
  const closePickerModal = useCallback(() => {
    modalRef.current?.close();
  }, []);
  const [images, setImages] = useState<string[]>([]);

  // Function to handle adding an image
  const addImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0].uri) {
      if (images.length < maxImages) {
        setImages((prevImages) => [...prevImages, result.assets[0].uri]);
      } else {
        alert(`You can only add up to ${maxImages} images.`);
      }
    }
    closePickerModal();
  };

  // Function to handle deleting an image
  const deleteImage = (uri: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== uri));
  };

  return (
    <View className="gap-4">
      {images.length < maxImages && (
        <TouchableOpacity
          onPress={openPickerModal}
          className="flex-row items-center justify-center gap-4 border-2 border-dashed border-[#F1F1FA] rounded-2xl p-4 px-5"
        >
          <Image
            source={require("../../assets/icons/attachment.png")}
            className="w-5 h-5"
            resizeMode="contain"
          />
          <Text className="font-inter500 text-lg text-light20">
            Add attachment
          </Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(uri) => uri}
        renderItem={({ item }) => (
          <View className="relative m-4 rounded-xl ">
            <Image source={{ uri: item }} className=" w-28 h-28 rounded-xl " />
            <TouchableOpacity
              onPress={() => deleteImage(item)}
              style={styles.deleteButton}
            >
              <Ionicons name="close" color="white" size={20} />
            </TouchableOpacity>
          </View>
        )}
      />
      <AttachmentPickerModal addImage={addImage} modalRef={modalRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 12,
    padding: 2,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 12,
  },
});

export default AttachmentPicker;

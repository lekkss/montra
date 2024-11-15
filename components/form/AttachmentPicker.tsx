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
import * as DocumentPicker from "expo-document-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import AttachmentPickerModal from "../modal/AttachmentPickerModal";
import { Ionicons } from "@expo/vector-icons";

const AttachmentPicker = () => {
  // ref
  const modalRef = useRef<BottomSheetModal>(null);
  // callbacks
  const openPickerModal = useCallback(() => {
    modalRef.current?.present();
  }, []);
  const closePickerModal = useCallback(() => {
    modalRef.current?.close();
  }, []);
  const [image, setImage] = useState<string | null>(null);

  // Function to handle adding an image
  const addImage = async (type: "camera" | "gallery" | "document") => {
    let result;

    if (type === "camera") {
      // Request permission to access camera
      const cameraPermission =
        await ImagePicker.requestCameraPermissionsAsync();
      if (cameraPermission.granted) {
        result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 1,
        });
      } else {
        alert("Camera permission is required.");
        return;
      }
    } else if (type === "gallery") {
      // Request permission to access the media library
      const galleryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (galleryPermission.granted) {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only images
          allowsEditing: true,
          quality: 1,
        });
      } else {
        alert("Gallery permission is required.");
        return;
      }
    } else if (type === "document") {
      // Request permission to access documents
      const documentPermission = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allow all types of documents
      });
      console.log(documentPermission);

      if (documentPermission) {
        result = documentPermission;
      } else {
        alert("Document picker permission is required.");
        return;
      }
    }

    // Handle the result based on type
    if (result && result.assets) {
      const uri = result.assets[0].uri; // For camera/gallery, uri might be inside assets
      if (uri) {
        // Set the image/document URI
        setImage(uri);
      }
    }

    // Close the picker modal if it's open
    closePickerModal();
  };

  // Function to handle deleting an image
  const deleteImage = (uri: string) => {
    setImage(null);
  };

  return (
    <View className="gap-4">
      {image ? (
        <View className="relative m-4 rounded-xl self-start">
          <View className="">
            <Image source={{ uri: image }} className=" w-28 h-28 rounded-xl " />
            <TouchableOpacity
              onPress={() => deleteImage(image)}
              style={styles.deleteButton}
            >
              <Ionicons name="close" color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
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

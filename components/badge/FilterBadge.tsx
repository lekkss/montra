import { View, Text, Pressable, Image } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import FilterModal from "../modal/FilterModal";

const FilterBadge = () => {
  const [filters, setFilters] = useState<any | null>();

  // ref for the modal
  const modalRef = useRef<BottomSheetModal>(null);

  // callbacks to open and close the modal
  const openModal = useCallback(() => {
    modalRef.current?.present();
  }, []);
  const closeModal = useCallback(() => {
    modalRef.current?.close();
  }, []);
  return (
    <Pressable onPress={openModal}>
      <View className="w-12 h-12 items-center justify-center border border-[#F1F1FA] rounded-xl">
        <Image
          source={require("../../assets/icons/sort.png")}
          resizeMode="contain"
        />
      </View>
      <FilterModal
        closeFilterModal={closeModal}
        filters={filters}
        modalRef={modalRef}
        onApply={() => {}}
        onReset={() => {}}
        setFilters={setFilters}
      />
    </Pressable>
  );
};

export default FilterBadge;

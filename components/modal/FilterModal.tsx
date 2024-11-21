import { View, Text, Pressable } from "react-native";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomModal from "./CustomBottomModal";
import Button from "../Buttton";
import SectionView, { CommonFilterRow } from "../filterViews";
import { transactionFlter } from "@/constants/data";
type PropType = {
  modalRef: React.RefObject<BottomSheetModalMethods>;
  closeFilterModal: () => void;
  onApply: () => void;
  onReset: () => void;
  filters: any;
  setFilters: Dispatch<SetStateAction<any>>;
};
const FilterModal = ({
  closeFilterModal,
  filters,
  modalRef,
  onApply,
  onReset,
  setFilters,
}: PropType) => {
  const renderContent = () => (
    <View className="flex-1 gap-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-inter600">Filter Transaction</Text>

        <Pressable className="bg-violet/20 p-3 px-4 w-fit rounded-full">
          <Text className="text-base text-violet font-inter500"> Reset</Text>
        </Pressable>
      </View>
      {Object.keys(sections).map((sectionName: string, index) => {
        const sectionView = sections[sectionName];
        let sectionData = transactionFlter[sectionName];
        let title = sectionName;
        return (
          <View
            key={sectionName}
            // entering={FadeInDown.delay(index * 100 + 100)
            //   .springify()
            //   .damping(11)}
          >
            <SectionView
              title={title}
              content={sectionView({
                data: sectionData,
                filters,
                setFilters,
                filterName: sectionName,
              })}
            />
          </View>
        );
      })}
      <Text className="text-xl font-inter500">Category</Text>

      <Button
        onPress={() => {}}
        title="Apply"
        containerStyle="bg-violet"
        textStyle="text-white"
      />
    </View>
  );

  const sections: { [key: string]: (props: any) => JSX.Element } = {
    "Filter By": (props: any) => <CommonFilterRow {...props} />,
    "Sort By": (props: any) => <CommonFilterRow {...props} />,
  };

  return (
    <CustomBottomModal
      modalRef={modalRef}
      renderContent={renderContent}
      snapPoints={["60%"]}
    />
  );
};

export default FilterModal;

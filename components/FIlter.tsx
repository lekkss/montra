import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Animated, { FadeInRight } from "react-native-reanimated";
import { filterData } from "@/constants/data";

type FilterPropType = {
  handleChangeFilter: (cat: string | null) => void;
  activeFilter: string | null;
};

const Filters = ({ activeFilter, handleChangeFilter }: FilterPropType) => {
  return (
    // <FlatList
    //   data={filterData}
    //   renderItem={({ item, index }) => (
    //     <CategoryItem
    //       title={item}
    //       index={index}
    //       isActive={activeFilter == item}
    //       handleChangeFilter={handleChangeFilter}
    //     />
    //   )}
    //   showsHorizontalScrollIndicator={false}
    //   horizontal
    //   contentContainerStyle={styles.flatListContainer}
    // />
    <View className="flex-row justify-evenly">
      {filterData.map((item, index) => (
        <Animated.View
          key={index}
          entering={FadeInRight.delay(index * 200)
            .duration(100)
            .springify()
            .damping(14)}
        >
          <Pressable
            className={`${
              activeFilter == item
                ? "bg-yellow/20 text-yellow"
                : "text-gray-400"
            } p-3 px-8 rounded-full`}
            onPress={() =>
              handleChangeFilter(activeFilter == item ? null : item)
            }
          >
            <Text
              className={`${
                activeFilter == item
                  ? " text-yellow font-inter600"
                  : "text-gray-400 font-inter500"
              } capitalize text-lg `}
            >
              {item}
            </Text>
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
};

export default Filters;

type FilterItemPropType = {
  title: string;
  index: number;
  handleChangeFilter: (cat: string | null) => void;
  isActive: boolean;
};
const CategoryItem = ({
  index,
  title,
  handleChangeFilter,
  isActive,
}: FilterItemPropType) => {
  return (
    <Animated.View
      entering={FadeInRight.delay(index * 200)
        .duration(100)
        .springify()
        .damping(14)}
    >
      <Pressable
        className={`${
          isActive ? "bg-yellow/20 text-yellow" : "text-gray-400"
        } p-3 px-5 rounded-full`}
        onPress={() => handleChangeFilter(isActive ? null : title)}
      >
        <Text
          className={`${
            isActive
              ? " text-yellow font-inter600"
              : "text-gray-400 font-inter500"
          } capitalize `}
        >
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
});

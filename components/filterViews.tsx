import { theme } from "@/constants/theme";
import { capitalze, hp } from "@/helpers/common";
import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SectionView = ({ title, content }: { title: string; content: any }) => {
  return (
    <View className="gap-5">
      <Text className="text-xl font-inter500">{title}</Text>
      <View>{content}</View>
    </View>
  );
};

export const CommonFilterRow = ({
  data,
  filters,
  filterName,
  setFilters,
}: {
  data: any;
  filters: any;
  filterName: string;
  setFilters: Dispatch<SetStateAction<any>>;
}) => {
  const onSelect = (item: string) => {
    console.log(filters);

    setFilters({ ...filters, [filterName]: item });
  };
  return (
    <View style={styles.flexRowWrap}>
      {data &&
        data.map((item: string, index: number) => {
          let isActive = filters && filters[filterName] === item;
          let backgroundColor = isActive ? theme.colors.neutral(0.7) : "white";
          let color = isActive ? "white" : theme.colors.neutral(0.7);
          return (
            <Pressable
              onPress={() => onSelect(item)}
              className={`${(backgroundColor = isActive
                ? "bg-violet/20"
                : "bg-white border border-light20")}  rounded-full p-3 px-4 `}
              key={item}
            >
              <Text
                className={`${(color = isActive
                  ? "text-violet"
                  : "text-black")}`}
                // style={[styles.outlineButtonText, { color }]}
              >
                {capitalze(item)}
              </Text>
            </Pressable>
          );
        })}
    </View>
  );
};

export default SectionView;

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: hp(2.4),
    fontWeight: "600",
    color: theme.colors.neutral(0.8),
  },
  flexRowWrap: {
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ontlineButton: {
    padding: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: theme.colors.grayBg,
    borderRadius: theme.radius.xs,
    borderCurve: "continuous",
  },
  outlineButtonText: {},
  colorWraper: {
    padding: 3,
    borderRadius: theme.radius.sm,
    borderWidth: 2,
    borderCurve: "continuous",
  },
  color: {
    borderRadius: theme.radius.sm - 3,
    borderCurve: "continuous",
    height: 30,
    width: 40,
  },
});

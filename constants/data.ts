export const filterData = ["today", "week", "month", "year"];
export type CashFlowDataPropType = {
  id: number;
  category: "shopping" | "food" | "subscription";
  description: string;
  type: string;
  amount: string;
  time: string;
};
export const cashFlowData: CashFlowDataPropType[] = [
  {
    id: 1,
    category: "shopping",
    description: "Buy some grocery",
    type: "expense",
    amount: "120",
    time: "10:00am",
  },
  {
    id: 2,
    category: "subscription",
    description: "Disney + Annual ...",
    type: "expense",
    amount: "80",
    time: "03:30pm",
  },
  {
    id: 3,
    category: "food",
    description: "Buy a ramen",
    type: "expense",
    amount: "32",
    time: "07:30pm",
  },
];

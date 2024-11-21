export const filterData = ["today", "week", "month", "year"];
export type CashFlowDataPropType = {
  id: number;
  category: "shopping" | "food" | "subscription" | "salary";
  description: string;
  title: string;
  type: string;
  amount: string;
  wallet: "Paypal" | "Revolut" | "Stripe";
  time: string;
};
export const cashFlowData: CashFlowDataPropType[] = [
  {
    id: 1,
    category: "shopping",
    title: "Buy some grocery",
    wallet: "Paypal",
    description:
      "Fugiat duis dolor officia ea mollit. Lorem commodo quis ad nulla commodo. Magna incididunt consequat nostrud nostrud cupidatat id dolore velit ut. Officia cupidatat fugiat incididunt incididunt esse.",
    type: "expense",
    amount: "120",
    time: "10:00am",
  },
  {
    id: 2,

    wallet: "Paypal",
    category: "subscription",
    description:
      "Fugiat duis dolor officia ea mollit. Lorem commodo quis ad nulla commodo. Magna incididunt consequat nostrud nostrud cupidatat id dolore velit ut. Officia cupidatat fugiat incididunt incididunt esse.",
    title: "Disney + Annual ...",
    type: "expense",
    amount: "80",
    time: "03:30pm",
  },
  {
    id: 3,
    wallet: "Stripe",
    category: "food",
    description:
      "Fugiat duis dolor officia ea mollit. Lorem commodo quis ad nulla commodo. Magna incididunt consequat nostrud nostrud cupidatat id dolore velit ut. Officia cupidatat fugiat incididunt incididunt esse.",
    title: "Buy a ramen",
    type: "expense",
    amount: "32",
    time: "07:30pm",
  },
  {
    id: 4,
    wallet: "Revolut",
    category: "salary",
    description:
      "Fugiat duis dolor officia ea mollit. Lorem commodo quis ad nulla commodo. Magna incididunt consequat nostrud nostrud cupidatat id dolore velit ut. Officia cupidatat fugiat incididunt incididunt esse.",
    title: "Salary for  November",
    type: "income",
    amount: "5000",
    time: "04:30pm",
  },
];

export const transactionFlter: any = {
  "Filter By": ["income", "expense"],
  "Sort By": ["Highest", "Lowest", "Newest", "Oldest"],
};

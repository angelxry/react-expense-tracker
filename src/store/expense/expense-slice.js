import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", price: 1.0 },
      { name: "Laptop", price: 1000.0 },
    ],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push({ name: "Cherry", price: 3 });
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  result: number;
  firstValue?: string;
  secondValue?: string;
}

export type CalculatorPayload = {
  firstValue: number;
  secondValue: number;
};

export type CalculatorPayloadString = {
  firstValue: string;
  secondValue: string;
};

const initialState: CalculatorState = {
  result: 0,
  firstValue: "",
  secondValue: "",
};
export const CalculatorSlice = createSlice({
  name: "CalculatorSlice",
  initialState,
  reducers: {
    addition: (state, action: PayloadAction<CalculatorPayload>) => {
      state.result = action.payload.firstValue + action.payload.secondValue;
    },
    subtraction: (state, action: PayloadAction<CalculatorPayload>) => {
      state.result = action.payload.firstValue - action.payload.secondValue;
    },
    setFirstValue: (state, action: PayloadAction<CalculatorPayloadString>) => {
      state.firstValue = state.firstValue?.concat(action.payload.firstValue);
    },
    setSecondValue: (state, action: PayloadAction<CalculatorPayloadString>) => {
      state.secondValue = state.secondValue?.concat(action.payload.secondValue);
    },
  },
});

export const { addition, subtraction, setFirstValue,setSecondValue } = CalculatorSlice.actions;

export default CalculatorSlice.reducer;

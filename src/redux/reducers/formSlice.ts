import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  generatedForm: '',
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<string>) => {
      state.generatedForm = action.payload
    },
  }
});

export const { setForm } = formSlice.actions
export default formSlice.reducer;

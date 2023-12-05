import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../reducers/formSlice";
export const store = configureStore({
    reducer: {
        generatedForm: formSlice,
    }
  });
  

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
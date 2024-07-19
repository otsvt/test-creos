import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./comments-reducer";
import designersSlice from "./designers-reducer";

export const store = configureStore({
  reducer: {
    comments: commentsSlice,
    designers: designersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

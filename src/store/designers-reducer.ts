/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Url } from "../types/enums";
import { IDesigner } from "../types/interfaces";
import { DESIGNER_AVATARS } from "../data/designers";
import { getRandomIssues } from "../utils/get/get-random-issue";
import axios from "axios";

type GetMainDataThunk = AsyncThunk<any, void, Record<string, never>>;

export const getDesigners: GetMainDataThunk = createAsyncThunk<any, void>("designers/getDesigners", async () => {
  const response = await axios.get(Url.Designers);
  return response.data;
});

export interface IDesignersState {
  data: IDesigner[] | null;
  error: string | null;
  isPending: boolean;
}

const initialState: IDesignersState = {
  data: null,
  error: null,
  isPending: false,
};

const designersSlice = createSlice({
  name: "designers",
  initialState,
  reducers: {
    toggleFollowing: (state, action: PayloadAction<number>) => {
      if (state.data) {
        const updatedDesigners = state.data.map((designer) => {
          if (designer.id === action.payload) {
            return {
              ...designer,
              isFollowing: !designer.isFollowing,
            };
          }
          return { ...designer };
        });

        state.data = updatedDesigners;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getDesigners.fulfilled, (state, action) => {
      const designers = action.payload;

      const updatedDesigners: IDesigner[] = designers.map((designer: any, i: number) => {
        return {
          email: designer.email.toLowerCase(),
          avatar: DESIGNER_AVATARS[i],
          name: designer.name,
          username: "@" + designer.username.toLowerCase(),
          issues: getRandomIssues(),
          isFollowing: false,
          id: designer.id,
        };
      });

      state.data = updatedDesigners;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getDesigners.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getDesigners.rejected, (state, action) => {
      state.error = action.error.message || "Unknown error";
      state.isPending = false;
    });
  },
});

export const { toggleFollowing } = designersSlice.actions;
export default designersSlice.reducer;

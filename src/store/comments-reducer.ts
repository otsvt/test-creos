/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Url } from "../types/enums";
import { IComment } from "../types/interfaces";
import { getRandomTopic } from "../utils/get/get-random-topic";
import axios from "axios";

type GetMainDataThunk = AsyncThunk<any, void, Record<string, never>>;

export const getComments: GetMainDataThunk = createAsyncThunk<any, void>("comments/getComments", async () => {
  const response = await axios.get(Url.Comments);

  return response.data;
});

export interface ICommentsState {
  data: IComment[] | null;
  error: string | null;
  isPending: boolean;
}

const initialState: ICommentsState = {
  data: null,
  error: null,
  isPending: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      const comments = action.payload;

      const updatedComments: IComment[] = comments.map((comment: any) => {
        const topic = getRandomTopic();

        return {
          ...comment,
          email: comment.email.toLowerCase(),
          topic_name: topic.name,
          topic_image: topic.image,
        };
      });

      state.data = updatedComments;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getComments.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.error = action.error.message || "Unknown error";
      state.isPending = false;
    });
  },
});

export default commentsSlice.reducer;

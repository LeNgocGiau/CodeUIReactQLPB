import { createSlice } from "@reduxjs/toolkit";

const taskDetailStatusSlice = createSlice({
  name: "sideBar",
  initialState: {
    isTaskDetailSheetOpen: false,
    taskId: -1,
  },

  reducers: {
    openTaskDetailSheet: (state, actions) => {
      state.taskId = actions.payload.taskId;
      state.isTaskDetailSheetOpen = true;
    },
    closeTaskDetailSheet: (state) => {
      state.isTaskDetailSheetOpen = false;
    },
  },
});

export const { openTaskDetailSheet, closeTaskDetailSheet } =
  taskDetailStatusSlice.actions;
export default taskDetailStatusSlice.reducer;

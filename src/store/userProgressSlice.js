import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  modalType: null,
  authMode: "login",
  showDrawer: false,
};
const userProgressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = !state.showModal;
      state.modalType = action.payload;
    },
    setHideModal: (state) => {
      state.showModal = false;
      state.modalType = null;
    },
    setAuthMode(state, action) {
      state.authMode = action.payload;
    },
    setShowDrawer(state) {
      state.showDrawer = true;
    },

    hideShowDrawer(state) {
      state.showDrawer = false;
    },
  },
});

// const userProgressAction = ;

export const userProgressAction = userProgressSlice.actions;
export default userProgressSlice.reducer;

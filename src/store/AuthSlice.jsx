import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isCreated: false,
}
const userSlice = createSlice({
  name: 'account',
  initialState,
  reducers :{
    toggleIsCreated (state){
      state.isCreated = !state.isCreated
    }
  }
})

export const { toggleIsCreated } = userSlice.actions
export default userSlice.reducer;
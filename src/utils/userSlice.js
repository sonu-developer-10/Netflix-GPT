const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        addUser: (stste, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
import {User} from "../../types/User"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

interface UserState {
    users: User[],
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state:UserState,action:PayloadAction<User>) => {
            state.users.push(action.payload);
        }
    }
})

export default userSlice.reducer;
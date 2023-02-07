import {User} from "../../types/User"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

interface UserState {
    users: User[] ,
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state:UserState,action:PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        updateUser: (state:UserState,action:PayloadAction<User>) => {
            state.users = state.users.map((user: User) => {
                if(user.id === action.payload.id) {
                    user = action.payload;
                    return user;
                }
                return user;
            })
        },
        removeUser: (state:UserState,action:PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    }
})

export default userSlice.reducer;
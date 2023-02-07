import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice"
import {avatarApi} from "../api/AvatarService";
const rootReducer = combineReducers({
    [avatarApi.reducerPath] : avatarApi.reducer,
    userSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(avatarApi.middleware);
    }
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
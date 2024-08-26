import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/authSlice"; // Import default export correctly

const persistConfig = {
    key: 'auth',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer); // Use authReducer instead of authSlice

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(baseApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persister = persistStore(store);

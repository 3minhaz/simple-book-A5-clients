import { configureStore } from "@reduxjs/toolkit";
import api from "./hooks/api/apiSlice";
import bookReducer from "./books/bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

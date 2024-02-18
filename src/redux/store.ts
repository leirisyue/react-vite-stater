import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter.slide'

// redux store
export const store = configureStore({
   reducer: {
      counter: counterReducer
   },
})


// -----------------------------------goi y code-----------------------------------

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState> // => get stype
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
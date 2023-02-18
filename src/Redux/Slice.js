import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
// import { collection, query, onSnapshot,doc, updateDoc, deleteDoc } from "firebase/firestore";
// import { db } from "../firebase";

const initialState = {
    todoArr: [],
}

export const Slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getAllTodos: (state, action) => {
            state.todoArr = action.payload;
        },
    }
})

export const store = configureStore({
    reducer: {
        todos: Slice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export const { getAllTodos } = Slice.actions

export default Slice.reducer
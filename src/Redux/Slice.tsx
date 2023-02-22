import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export interface Todo{
    title: string;
    completed: boolean;
    id: string
}
interface TodoProps {
    todos: Todo[]
}

const initialState: TodoProps = {
    todos: [],
}


export const Slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getAllTodos: (state, action) => {
            state.todos = action.payload;
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


export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;

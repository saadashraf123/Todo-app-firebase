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
        submitTodos: (state, action) => {
            state.todos = action.payload;
        },
    }
})


export const store=configureStore({
    reducer: {
        todo: Slice.reducer
    }
})
export const useAppDispatch: ()=>typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;

export const { submitTodos } = Slice.actions

export default Slice.reducer
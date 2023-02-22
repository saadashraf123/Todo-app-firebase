import React, { useEffect } from 'react'
import Todo from "./Todo";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { getAllTodos, useAppSelector, useAppDispatch } from '../Redux/Slice'

const Todos = () => {
    const dispatch = useAppDispatch()
    const todo = useAppSelector(state=>state.todos.todos)    

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray:(object)[] = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            dispatch(getAllTodos(todosArray))
        });
        return () => unsub();
    }, []);


    return (
        <>
            {
                todo.length > 0 &&
                <div className="todo_container">
                    <h2>Todo List</h2>
                    {todo.map((data) => (<Todo key={data.id} todo={data} />))}
                </div>
            }
        </>
    )
}

export default Todos
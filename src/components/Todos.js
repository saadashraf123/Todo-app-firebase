import React, { useState, useEffect } from 'react'
import Todo from "./Todo";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector, useDispatch } from 'react-redux'
import { getAllTodos } from '../Redux/Slice'

const Todos = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todos.todoArr)

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
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
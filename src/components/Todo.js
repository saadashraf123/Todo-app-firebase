import React from "react";
import { db } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from 'react-hook-form'

export default function Todos({ todo }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: todo.title,
        }
    });
    const handleChange = async (data) => {
        await updateDoc(doc(db, "todos", todo.id), { title: data.title });
    };

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
    };
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };
    return (
        <div className="todo">
            <form onSubmit={handleSubmit(handleChange)}>
                <input {...register("title", { required: "This is Required" })}
                    style={{ textDecoration: todo.completed && "line-through" }}
                />
                <p>{errors.title?.message}</p>
                <button type='submit' value="Edit" className="button button-edit" ><EditIcon id="i" /></button>
                <button
                    className="button button-complete"
                    onClick={() => toggleComplete(todo)}
                >
                    <CheckCircleIcon id="i" />
                </button>
                <button className="button button-delete" onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon id="i" />
                </button>
            </form>
        </div>
    );
}
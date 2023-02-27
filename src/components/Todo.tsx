import React from "react";
import { db } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues ={
    title: string;
};

interface TodoListProps {
  todo: todoTypes;
}

interface todoTypes {
  title: string;
  completed: boolean;
  id: string
}

const styles = {
    container: {
      textDecoration: "line-through"
    }
  } as const;
  
const Todo = ({ todo }:TodoListProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            title: todo.title,
        }
    });
    const handleChange: SubmitHandler<FormValues> = (data) => {
        updateDoc(doc(db, "todos", todo.id), { title: data.title });
    };

    const toggleComplete = async (todo:todoTypes) => {
        await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
    };
    const handleDelete = async (todo:todoTypes) => {
        await deleteDoc(doc(db, "todos", todo.id));
    };
    return (
        <div className="todo">
            <form onSubmit={handleSubmit(handleChange)}>
                <input {...register("title", { required: "This is Required" })}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                />
                <p>{errors.title?.message}</p>
                <button type='submit' value="Edit" className="button button-edit" ><EditIcon id="i" /></button>
                <button
                    className="button button-complete"
                    onClick={() => toggleComplete(todo)}
                >
                    <CheckCircleIcon id="i" />
                </button>
                <button className="button button-delete"
                    onClick={() => handleDelete(todo)}
                >
                    <DeleteIcon id="i" />
                </button>
            </form>
        </div>
    );
}

export default Todo
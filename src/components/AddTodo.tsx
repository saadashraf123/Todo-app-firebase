import React from "react";
import { useForm } from 'react-hook-form'
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

type FormValues = {
    title: string;
    completed: boolean;
};
export default function AddTodo() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
    const submitHandler = async (data: FormValues) => {
        await addDoc(collection(db, "todos"), {
            title: data.title,
            completed: false
        });
        reset();
    }

    return (
        <div className="todo" >
            <h3>Add New Todos</h3>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input {...register("title", { required: "This is Required" })} placeholder="Add Title" />
                <p>{errors.title?.message}</p>
                <input className="button add-button" type='submit' value="Add Todo" />
            </form>
        </div>

    );
}
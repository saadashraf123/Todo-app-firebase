import React from 'react'
import { useAppDispatch } from './NewSlice'
import { useForm } from "react-hook-form";
import { submitTodos } from './NewSlice';

interface FormValues {
    title: string;
};


const AddTest = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        dispatch(submitTodos(data.title))
      };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddTest
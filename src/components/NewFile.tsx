import React from "react";
import { useForm } from "react-hook-form";

interface FormValues {
    title: string;
};

interface TodoListProps {
  todo: todoTypes;
}

interface todoTypes {
  title: string;
}

export default function NewFile({ todo }: TodoListProps) {
    console.log(todo);
    
  const { register, handleSubmit } = useForm({
    defaultValues: {
        title: todo.title,
    }
});

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
        <h1>{todo.title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} />
        <input type="submit" />
      </form>
    </>
  );
}

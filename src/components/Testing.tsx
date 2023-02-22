
interface TodoListProps {
    todo: todoTypes[];
}
interface todoTypes {
    title: string,
}


const Testing = ({todo}:TodoListProps) => {
  return (
    <>
        {
            todo.map((data) => <h1>{data.title}</h1>)
        }
    </>
  )
}

export default Testing
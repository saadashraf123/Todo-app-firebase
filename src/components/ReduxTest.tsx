import { useAppSelector } from './NewSlice'

const ReduxTest = () => {
    const todos = useAppSelector(state=>state.todo.todos)    
  return (
    <div>
    </div>
  )
}

export default ReduxTest
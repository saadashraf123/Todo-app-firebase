import NewFile from './NewFile'

const NewFile2 =  () => {  
    const todo= 
        {
            title: "saad",
            completed: true,
            id: "sw464rt3gdd"
        }
    
  return (
    <div>
        <NewFile todo={todo}/>
    </div>
  )
}

export default NewFile2
import React from "react";
import Title from "./components/Title"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos";
import AddTest from "./components/AddTest";
import ReduxTest from "./components/ReduxTest";

function App() {

    return (
        <div className="App">
            <Title/>
            <AddTodo/>
            <Todos />
        </div>
    );
}

export default App;

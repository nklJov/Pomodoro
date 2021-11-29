import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewTodo from './NewTodo'
import "../../../src/App.css"

function TodoMain() {
    
    const [todoList, settodoList] = useState([])
    const [todoName, setTodoName] = useState("")
    
    useEffect(() => {
        axios.get('http://localhost:8080/todos')
        .then(res => {
            settodoList(res.data.todoList)
        })
        .catch(error => 'Greska: '+ error)

    }, [])

    const addNewTodo = () => {
        axios.post('http://localhost:8080/todos',
        {newTodo: {name : todoName, isFinished: 0}})
        .then(res => {
            console.log(res)
            settodoList([...todoList, res.data.newTodo])
            setTodoName('')
        })
        .catch(error => 'Greska: '+ error)
    }

    let todos;
    if(todoList) {
        console.log("pre mape: ", todoList)
        todos = todoList.map(todo => {
            return <div className="toDoDiv" key={todo.id}>{todo.id}. {todo.name}</div>
        })
    }

    return (
        <div>
            {todos}
            <NewTodo name={todoName} setName={setTodoName}/>
            <button className="btn btn-success mt-3 align-center"
                onClick={addNewTodo}>Dodaj</button>
        </div>
    )
}

export default TodoMain
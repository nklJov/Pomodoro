import React from 'react'

function NewTodo({name, setName}) {
    return (
        <div className="mt-5">
            <input 
             value={name}
             className="form-control" 
            placeholder="Unesite novi task"
            onChange={(e) => setName(e.target.value)}>

            </input>
        </div>
    )
}

export default NewTodo
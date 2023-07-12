import React from 'react'

const Header = () => {
    return (
        <main> 
        <h1 className='title'>Lista de Tareas</h1>
        <div className='btn-container'>
        <input className='input-add' type="Texto"
        placeholder="Ingresa tu nueva tarea"
        onChange={(e) => console.log(e.target.value)}/>
        <button className='btn-add'>+</button>
        </div>
        </main>
    );
};

export default Header;
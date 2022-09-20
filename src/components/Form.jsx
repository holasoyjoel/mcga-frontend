import React, { useState } from 'react'
import "./Form.css";

const Form = () => {
    const [usuario , setUsuario] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${usuario} - ${password}`);
        localStorage.setItem("usuario" , JSON.stringify(usuario));
        localStorage.setItem("password" , JSON.stringify(password));
        setUsuario("");
        setPassword("");
    }
    
    const handleInputChangeUsuario = (e) =>{
        setUsuario(e.target.value);
        
    }
    const handleInputChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input 
                type="text"
                name='usuario'
                onChange={handleInputChangeUsuario}
                required
                value={usuario}
            />
            
            <label>Contraseña</label>
            <input 
                type="password"
                name='contraseña'
                onChange={handleInputChangePassword}
                required
                value={password}
            />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form;
import React from 'react'

function login() {
return (
    <form>
        <input type="text" placeholder="Escribe tu nombre" name="username"></input>
        <input type="password" placeholder="Contraseña" name="password"></input>
        <input type="submit"></input>
    </form>
    )
}

export default login
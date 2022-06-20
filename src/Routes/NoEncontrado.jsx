import React from 'react'
import { Link } from 'react-router-dom'

const NoEncontrado = () => {
  return (
    <div>
        <h1>404</h1>
        <Link className='btn btn-outline-primary' to='/'>Inicio</Link>
    </div>
  )
}

export default NoEncontrado
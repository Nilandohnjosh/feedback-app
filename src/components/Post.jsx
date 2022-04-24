import React from 'react'
import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
  const { id, name } = useParams()
  // const params = useParams()
  const status = 404
  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello');
    navigate('/about')
  }

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Post: {id}</h1>
      <p>Name: {name}</p>
      <button onClick={onClick}></button>
    </div>
  )
}

export default Post
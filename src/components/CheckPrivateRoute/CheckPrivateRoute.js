import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


const CheckPrivateRoute = () => {
  const { user } = useSelector(state => state.user)

  if (true) return (
    <Navigate to='/login' />
  )
  return <Outlet />
}

export default CheckPrivateRoute
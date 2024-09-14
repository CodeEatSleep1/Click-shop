import React from 'react'
import { useLocation } from 'react-router-dom'

function ErrorPage() {
  let location =useLocation()
  return (
    <div className='w-full h-svh flex justify-center pt-20'><h1 className="text-2xl">No page found with this name <b>{location.pathname}</b></h1> </div>
  )
}

export default ErrorPage
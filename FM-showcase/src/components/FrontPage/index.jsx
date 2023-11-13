import React from 'react'
import Headerrr from '../Header/index'
import { Outlet } from 'react-router-dom'
import CustomHeader from '../Header/index'

const FrontPage = () => {
  return (
    <>
    <CustomHeader/>
    <Outlet/>
    </>
  )
}

export default FrontPage
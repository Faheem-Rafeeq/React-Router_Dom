import React from 'react'
import { Outlet, useParams } from 'react-router-dom'


const Products = () => {
  const {id} = useParams()

  return (
   <h1>Products {id}</h1>
  )
}

export default Products

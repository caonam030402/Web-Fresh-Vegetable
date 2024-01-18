import React from 'react'
import Discount_banar from './components/Discount_banar'
import Products from './components/Products'
import Fillter from './components/Fillter'

export default function Shop2() {
  return (
    <div className='container '>
      <Discount_banar />
      <Fillter />
      <Products />
    </div>
  )
}

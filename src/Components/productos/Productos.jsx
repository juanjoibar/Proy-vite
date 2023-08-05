import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import InfiniteScrollList from './InfiniteScrollList'

function Productos() {
  return (
    <>
    
    <Navbar/>
    <div>Productos</div>
    <InfiniteScrollList/>
    <Footer/>
    </>
  )
}

export default Productos
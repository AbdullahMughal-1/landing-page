import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Service'
import About from './components/About'
import Product from './components/Product'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Blog />
      <Footer />
    </>
  )
}

export default App

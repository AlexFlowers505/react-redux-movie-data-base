/////// timestamp: 01:01:05

//// IMPORTS

// packages
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// styles
import './styles/styles/styles.css'

// components
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import MovieDetail from './components/MovieDetail/MovieDetail'

//// THE_CODE
export default function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router> 
    </div>  
  )
}

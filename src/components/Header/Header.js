import React from 'react'
import { HiOutlineUserCircle as UserIcon } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovieOrShowDetails, fetchAsyncShows, fetchAsyncMovies } from '../../stateManagement/movies/movieSlice'

export default function Header() {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const submitHandler = evt => {
    evt.preventDefault()
    if (term === '') return alert('Please enter a movie or a show name.')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  return (
    <div className="header">
        <div className="logo">
          <Link to='/'>Movie App</Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input type="text" value={term} placeholder='Search a movie or a show' onChange={ evt => setTerm(evt.target.value)}/>
            <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
          </form>
        </div>
      <div className="user-image">
        <UserIcon />
      </div>
    </div>
  )
}

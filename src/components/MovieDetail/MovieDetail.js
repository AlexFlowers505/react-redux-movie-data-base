import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetails, getSelectedMovieOrShow } from '../../stateManagement/movies/movieSlice'
import './style/MovieDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faFilm, faThumbsUp, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { removeSelectedMovieOrShow } from '../../stateManagement/movies/movieSlice'



export default function MovieDetail() {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)

  useEffect( () => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (<div> ...</div>) :
        (<>
          <div className="section-left">
            <div className="movie-title">{data.title}</div>
            <div className="movie-rating">
              <span>IMDB Rating <FontAwesomeIcon icon={faStar} /> : {data.imdbRating}</span>
              <span>IMDB Votes <FontAwesomeIcon icon={faThumbsUp} /> : {data.imdbVotes}</span>
              <span>Runtime <FontAwesomeIcon icon={faFilm} /> : {data.Runtime}</span>
              <span>Year <FontAwesomeIcon icon={faCalendar} /> : {data.Year}</span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-left">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>)
      }
    </div>
  )
}

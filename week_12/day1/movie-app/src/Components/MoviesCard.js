import React from 'react'

export default function MoviesCard(props) {
    return (
        <div>
            {props.movieFromCache.Title}
            {props.movieFromCache.Type}
            {props.movieFromCache.Year}
            <img src={props.movieFromCache.Poster} alt="" />
        </div>
    )
}

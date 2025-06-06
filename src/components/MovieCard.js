import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const Moviecard = ({posterPath}) => {
  return (
    <div>
      <img alt='movie card' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default Moviecard
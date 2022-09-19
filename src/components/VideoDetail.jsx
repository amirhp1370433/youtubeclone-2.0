import React from 'react'
import { useState , useEffect } from 'react'
import {Link , useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Box , Stack , Typography} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {video} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const VideoDetail = () => {
  const [first, setfirst] = useState(second)
  useEffect(() => {

  }, [])
  
  return (
    <div>VideoDetail</div>
  )
}

export default VideoDetail
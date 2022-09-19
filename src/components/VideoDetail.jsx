import React from 'react'
import { useState , useEffect } from 'react'
import {Link , useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Box , Stack , Typography} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {video} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const VideoDetail = () => {
const [videoDetail, setVideoDetail] = useState('')
const {id} = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet?statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0])) 
  }, [id ])
  // check that video detail is null or not
  if(!videoDetail?.snippet) return 'loading...'
  
  const {snippet : { title , channelId , channelTitle} , statistics:{videoCount , likeCount }} = videoDetail
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column' , md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:"100%" , position:'sticky' , top:'86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant="h5" fontWeight='bold' p={2}>
              {title}
            </Typography>
          
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
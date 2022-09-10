import React from 'react'
import { useEffect , useState } from 'react'
import { Box , Stack , Typography } from '@mui/material'
import {Sidebar , Videos} from './'
import { fetchFormAPI } from '../utils/fetchFormAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  useEffect(()=>{
    fetchFormAPI(`search?part=snippet&q=${selectedCategory}`)
  } , [selectedCategory]) 
  return (
    <Stack sx={{flexDirection : {
      sx:'column' , md:'row'
    }}}>
      <Box sx={{
        height:{
          sx:'auto' , md:'92vh'
        } ,
        borderRight: '1px solid #3d3d3d',
        p:{
          sx:0 , md:2
        }
      }}>
        <Typography className='copyright' variant='body2' sx={{
          mt:1.5 , 
          color:'#fff'
        }}>
          <Sidebar 
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
          />
          Copyright 2022 amirsade.co
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY : 'auto' , height:'90vh' , flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color : 'white'}}>
          {selectedCategory}
          <span style={{
            color : '#f31503'
          }}>
            videos
          </span>
        </Typography>
        <Videos videos = {[]}/>
      </Box>
    </Stack>
  )
}

export default Feed
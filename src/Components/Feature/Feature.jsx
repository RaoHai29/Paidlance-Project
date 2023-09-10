import React from 'react'
import Cards from '../Card/Card'
import './Feature.css'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material'
import emoji from '../Images/emoji-lap.png'
import EastIcon from '@mui/icons-material/East';

const Feature = () => {
  const joboptions=[
    'Web Developers','App Developers','UX Designers','Graphics Designer','Video Editor'
  ]
  return (
    <>
    <div className='Feature'>
    <Typography variant="subtitle2" component='p' className='subtitle'>
     Explore
    </Typography>
    <Stack direction='row' sx={{marginBottom:'40px'}}>
          <Typography variant="h3" component='h3' className='h3'>
          Featured Freelancers 
          </Typography>
          <img src={emoji} className='emoji' alt='emoji' style={{paddingLeft:'10px'}} />
    </Stack>
    <Stack variant='body2' component='div' className='job-options'>
     {joboptions.map((jobs)=>(
       <Stack  variant='h5' className='h5' key={jobs}>
       {jobs}
       </Stack>
     ))}

    </Stack>
    <Cards />
    <Button variant='contained' className='freelance-go' endIcon={<EastIcon />}>View All Freelancer</Button>
    </div> 
    </>
  )
}

export default Feature

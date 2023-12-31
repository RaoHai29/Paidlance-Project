import { Stack, Typography } from '@mui/material'
import React from 'react'
import './Counter.css'
import Groups2Icon from '@mui/icons-material/Groups2';
import CountUp from 'react-countup';
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import PushPinIcon from '@mui/icons-material/PushPin';
import BuildIcon from '@mui/icons-material/Build';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
const Counter = () => {
    const [counting,setCounting] = useState(false);
  return (
    <>
    <ScrollTrigger onEnter={()=> setCounting(true)} onExit={()=> setCounting(false)}>
    <div  className='counter' >
       {/* 1st count */}
        <Stack direction='column' className='count'>
            <Stack direction='row' spacing={2}>
                <Groups2Icon sx={{fontSize:'35px',color:'white',padding:'6px',background:'#0077FF',borderRadius:'10px'}} />
                <Typography variant="h4" sx={{color:'white'}}>
                    {counting && <CountUp start={0} end={4259} duration={3} delay={0} style={{fontWeight:'550'}} /> }+
                </Typography>
            </Stack>
            <Typography variant='h6' sx={{fontSize:'18px',color:'white',fontWeight:'550'}}>
                    Registered Freelancers
            </Typography>
        </Stack>
        {/* 2nd count */}
        <Stack direction='column' className='count'>
            <Stack direction='row' spacing={2}>
                <PushPinIcon sx={{fontSize:'35px',color:'white',padding:'6px',background:'#0077FF',borderRadius:'10px'}} />
                <Typography variant="h4" sx={{color:'white'}}>
                {counting && <CountUp start={0} end={14} duration={3} delay={0} style={{fontWeight:'550'}} /> }+
                </Typography>
            </Stack>
            <Typography variant='h6' sx={{fontSize:'18px',color:'white',fontWeight:'550'}}>
                        Countries Registered
            </Typography>
        </Stack>
        {/* 3rd count */}
        <Stack direction='column' className='count'>
            <Stack direction='row' spacing={2}>
                <BuildIcon sx={{fontSize:'35px',color:'white',padding:'6px',background:'#0077FF',borderRadius:'10px'}} />
                <Typography variant="h4" sx={{color:'white'}}>
                {counting && <CountUp start={0} end={273} duration={3} delay={0} style={{fontWeight:'550'}} /> }+
                </Typography>
            </Stack>
            <Typography variant='h6' sx={{fontSize:'18px',color:'white',fontWeight:'550'}}>
                        Skills Categories
            </Typography>
        </Stack>
        {/* 4th count */}
        <Stack direction='column' className='count'>
            <Stack direction='row' spacing={2}>
                <LocalParkingIcon sx={{fontSize:'35px',color:'white',padding:'6px',background:'#0077FF',borderRadius:'10px'}} />
                <Typography variant="h4" sx={{color:'white'}}>
                {counting && <CountUp start={0} end={172} duration={3} delay={0} style={{fontWeight:'550'}} /> }+
                </Typography>
            </Stack>
            <Typography variant='h6' sx={{fontSize:'18px',color:'white',fontWeight:'550'}}>
                         Product Hunt Upvotes
            </Typography>
        </Stack>
        
    </div>
    </ScrollTrigger>
    </>
  )
}

export default Counter

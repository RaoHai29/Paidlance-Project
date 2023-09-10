import { Button, Stack, Typography } from '@mui/material'
import React ,{useState} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [menu,setMenu]=useState(false)
  return (
    <>
    <nav>
        <Typography variant='h4' sx={{fontWeight:'600',color:'black'}}>
            paid<span style={{color:'#0077FF'}}>lance</span>.
        </Typography>
        <ul className={menu ? "open" : ""}>
            <li className='un'>Home</li>
            <li className='un'>About</li>
            <li className='un'>Find Freelancers</li>
        </ul>
        <Stack className='login-btns' id={menu ? "open" :""} direction='row' spacing={3}>
            <Button className='btn-1' sx={{border:'1.5px solid black',height:'18px',padding:'20px 25px',color:'black',textTransform:'capitalize',fontWeight:'600'}} >Sign Up</Button>
            <Button className='btn-2' sx={{border:'1.5px solid #0077FF',height:'18px',padding:'20px 25px',color:'white',textTransform:'capitalize',fontWeight:'600',background:'#0077FF'}} >Login</Button>
        </Stack>
        <Button className='btn-mob' onClick={()=>{
            setMenu(!menu)
        }}><MenuIcon sx={{color:'black',fontSize:'30px'}} /></Button>
    </nav>
    </>
  )
}

export default Navbar

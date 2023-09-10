import React from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import qasim from '../Images/qasim hussain.jpg'
import rao from '../Images/Rao.jpg'
import usama from '../Images/usama.jpg'
import ahsan from '../Images/Ahsan.jpg'
import { Stack } from '@mui/material';
import pakflag from '../Images/pakistan-flag-icon.png'
import indflag from '../Images/india-flag-icon.png'
import sriflag from '../Images/sri-lanka-flag-icon.png'
import bluetick from '../Images/bluetick.png'



const Cards = () => {
    const developers=[
        {
         id:0,
         flag:pakflag,
         Name:'Qasim Hussain',
         Position:'Sr. PHP Developer',
         pic:qasim   ,
         countryname:'Pakistan'
        },
        {
            id:1,
            flag:sriflag,
            Name:'Usama Malik',
            Position:'Sr.Product Designer',
            pic:usama  ,
            countryname:'Sri Lanka' 
           },
           {
            id:2,
            flag:pakflag,
            Name:'Rao Abdul Hai',
            Position:'Frontend Developer',
            pic:rao  ,
            countryname:'Pakistan'
           },
        {
            id:3,
            flag:indflag,
            Name:'Ahsan',
            Position:'Sr. Angular Expert',
            pic:ahsan  ,
            countryname:'India'
        },
        {
            id:4,
            flag:pakflag,
            Name:'Rao Abdul Hai',
            Position:'Frontend Developer',
            pic:rao  ,
            countryname:'Pakistan'
        },
        {
            id:5,
            flag:pakflag,
            Name:'Qasim Hussain',
            Position:'Graphics Designer',
            pic:qasim   ,
            countryname:'Pakistan'
        },
        {
            id:6,
            flag:sriflag,
            Name:'Usama Malik',
            Position:'Sr.Product Designer',
            pic:usama   ,
            countryname:'Sri Lanka'
        },
        {
            id:7,
            flag:indflag,
            Name:'Ahsan',
            Position:'Angular Developer',
            pic:ahsan  ,
            countryname:'India'
        }
           
    ]
  return (
    <>
     <div className='Cards'>
     {developers.map((item)=>(
        <Card sx={{ maxWidth: '220px',border:'0.5px solid white ',borderTop:'5px solid blue',marginBottom:'30px',marginRight:'100px' }} key={item.id}>
        <Stack variant='subtitle2' component='div' className='country'>
            <img src={item.flag} width={30} height={18} alt='pakistan' />
             <Typography variant="subtitle2" sx={{paddingLeft:'10px',fontWeight:'550'}}>{item.countryname}</Typography>
        </Stack>
        <img src={item.pic} style={{width:'160px', height:'160px',padding:'28px',borderRadius:'50%',borderEndStartRadius:'0'}} alt={item.Name} />
        <img src={bluetick} className='bluetick' alt='Bluetick' />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6" sx={{fontSize:'18px',textAlign:'center',fontWeight:550,marginTop:'-35px'}}>
          {item.Name}
        </Typography>
        <Typography variant="body2" component='p' width='120px' sx={{padding:'7px 15px',background:'rgba(0, 119, 255,0.099)',marginLeft:'25px',borderRadius:'15px',fontSize:'13px' }}>
          {item.Position}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' sx={{textTransform:'capitalize',borderRadius:'18px',padding:'8px 15px',fontWeight:'550',background:'#0077FF',marginLeft:'50px',marginTop:'-10px'}}>Contact me</Button>
      </CardActions>
    </Card>
     ))}

    

     </div>
    </>
  )
}

export default Cards

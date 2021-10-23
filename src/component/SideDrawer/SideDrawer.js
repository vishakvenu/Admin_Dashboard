import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PanoramaIcon from '@mui/icons-material/Panorama';
import RoomIcon from '@mui/icons-material/Room';
import "./sideDrawer.css";
import { Avatar, Container, Divider, Typography } from "@mui/material";
import {useStyles} from '../MuiStyles/MuiStyles'
import vishak from '../../assets/vishak.jpg'
import LiItems from "./LiItems";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const SideDrawer = ({ changer }) => {
  const classes=useStyles()
  const nameRef=useRef()

  const data=[{
    Icon:HomeIcon,
    text:"Dashboard",path:"/dashboard"
  },
  {
    Icon:PanoramaIcon,
    text:"Page",path:"/page"
  },
  {
    Icon:EqualizerIcon,
    text:"Chart",path:"/chart"
  },
  {
    Icon:RoomIcon,
    text:"Map",path:"/map"
  },
]

  // const getText=(e)=>{
  //   if(e.target.parentElement.classList.contains('LiItems')){
  //     let item=e.target.innerText
  //     console.log(item)
  //   }
  // }
  return (
    <div className="Menu" onClick={changer}>
      <Container >
      <div className="header-text">
      <AutoAwesomeMosaicIcon className="Icon" fontSize="medium"/>
        <Typography variant="h5" className="Main-heading">
        
          Tim Creative
        </Typography>
        </div>
        <Divider className="Divider"/>

        <ul className="user-profile">
            <NavLink to="/profile"><Avatar sx={{ width: 56, height: 56 }} className={classes.AvatarIcon} src={vishak} />
            <span className="MenuItems">Vishak</span>
            </NavLink>

        </ul>
        <Divider className="Divider"/>
        <ul className="Main_Menu" >
        {data.map((item)=>{
          return(
            <LiItems key={item.text} refVal={nameRef} Icon={item.Icon}
             classes={classes.icon} text={item.text} path={item.path} />
          )
        })}
          
        </ul>
      </Container>
    </div>
  );
};

export default SideDrawer;

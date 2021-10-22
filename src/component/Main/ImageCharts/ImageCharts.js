import React from "react";
import {
  Card,
  CardMedia,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useStyles } from "../../MuiStyles/MuiStyles";
import styled from 'styled-components';
import StreetviewIcon from "@mui/icons-material/Streetview";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReplayIcon from '@mui/icons-material/Replay';
import EditIcon from '@mui/icons-material/Edit';
import "./ImageChart.css";

const ImageChartFooter=styled.footer`
    display:flex;
    justify-content:space-between !important;
`
const ImageCharts = ({item}) => {
  const classes = useStyles();
  return (
    <Card className={classes.ImageCard} key={item.id}>
      <CardMedia
        component="img"
        height="200"
        src={item.Image}
        alt="green iguana"
        className={classes.ImageCardMedia}
      />

      <div className="ImageChartIcons">
        <Tooltip className="IndivChartIcons" title="view">
          <IconButton>
            <StreetviewIcon fontSize="small"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Reload">
          <IconButton>
            <ReplayIcon fontSize="small"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton >
            <EditIcon fontSize="small"/>
          </IconButton>
        </Tooltip>
      </div>

      <Typography variant="h5" sx={{ fontWeight:300,textAlign: "center",paddingBottom:'5px' }} color="#424242">
        {item.HotelName}
      </Typography>
      <Typography gutterBottom paragaph="true" variant="body2" sx={{ textAlign: "center" }} color="#757575">
        {item.HotelDescription}
      </Typography>
    <Divider sx={{m:"15px"}}/>
    <ImageChartFooter>
        <Typography>{item.RatePerNight}</Typography>
        <div className="FooterIcons" style={{display:"flex",alignItems:"center"}}>
        <LocationOnIcon />
        <span>{item.location}</span>
        </div>
    </ImageChartFooter>
    </Card>
  );
};

export default ImageCharts;

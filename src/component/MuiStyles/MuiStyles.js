import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles({
  icon:{
      fontSize:'25px',
    '@media (max-width:560px)':{
                 fontSize:'20px'
     }
  },
  AvatarIcon:{
   
    '@media (max-width:560px)':{
      height:'40px',
      width:'40px'
     }
  },
  searchField:{
    padding:'5px 10px',
    boxSizing:'border-box',
    '& .MuiInputLabel-root':{
      paddingLeft:'10px'
    }
  },
  main:{
    paddingTop:'70px',
    '@media(max-width:600px)':{
      paddingTop:'50px'
    }
  },
  card:{
    width:'100%',
    padding:'10px',
    overflow: 'visible',
    '@media(max-width:600px)':{
      marginTop:'30px'
    },
    '@media(min-width:600px) and (max-width:900px)':{
      marginTop:'40px'
    },
    '@media(min-width:900px)':{
      marginTop:'20px'
    }
  },
  Icon:{
    fontSize:'80px',
    width:'50px',
    height:'50px',
    borderRadius:'10px',
    padding:'25px 15px',
    color:'#fff',
    backgroundColor:(props)=>props.color,
    '@media(max-width:600px)':{
      fontSize:'60px',
      width:'80px',
      height:'90px',
      padding:'25px 15px',

    },
    '@media(min-width:600px) and (max-width:900px)':{
      fontSize:'70px',
    width:'100px',
    height:'120px',
    },
    '@media(min-width:900px)':{
      fontSize:'60px',
      width:'70px',
      height:'90px',
    }
  },
  divider:{
    marginTop:'18px',
    '@media(max-width:600px)':{
      marginTop:'6px'
    }
  },
  paper:{
    marginTop:'80px',
    padding:'25px 10px',
    '@media(max-width:600px)':{
      marginTop:'50px'
    }
  },
  tableIcon:{
    fontSize:'70px',
    width:'80px',
    height:'100px',
    borderRadius:'10px',
    padding:'25px 15px',
    color:'#fff',
    backgroundColor:'green',
    '@media(max-width:600px)':{
      fontSize:'55px',
      width:'70px',
      height:'90px',
    },
  },
    
  tableHeader:{
    '@media(max-width:600px)':{
      marginLeft:'85px',
      fontSize:'20px !important'
    },
    '@media(min-width:600px) and (max-width:900px)':{
      marginLeft:'125px'
    },
    '@media(min-width:900px)':{
      marginLeft:'120px'
    }
  },
  chart:{
    marginTop:'29px',
    marginBottom:'0px',
    '@media(max-width:600px)':{
      marginTop:'29px',
    marginBottom:'50px',
    },
    '@media(min-width:600px) and (max-width:900px)':{
    marginBottom:'0px'
    },
    '@media(min-width:900px)':{
    marginBottom:'0px'
    }
  }
  ,
  chartsContent:{
    width:"10px"
  },
  loopIcon:{
    marginRight:'5px',
    
  },
  ManageListings:{
    margin:"20px 0 20px 0",
    '@media(max-width:600px)':{
      margin:"8px 0"
    },
    '@media(min-width:600px) and (max-width:900px)':{
    marginBottom:'10px 0'
    },
    '@media(min-width:900px)':{
    // marginBottom:'0px'
    }
  },
  ImageCard:{
    padding:"0px 15px",
    overflow:"visible",
    position:"relative",
    // height:'300px',
    paddingBottom:"10px",
    boxSizing:'border-box',
    '&:hover img':{
      transform:'translateY(-40px)'

    } 
  },
  ImageCardMedia:{
    position:"absolute",
    top:"-10px",
    width:'90%',
    transition:'all 0.3s ease-in',
    zIndex:9
  },
  
})


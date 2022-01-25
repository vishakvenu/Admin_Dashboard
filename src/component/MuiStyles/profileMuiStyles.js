import { makeStyles } from "@mui/styles";
import vishak from '../../assets/vishak.jpg'

export const useStyles=makeStyles({
    helloContainer:{
        height:'600px',
        width:'100%',
        position:'relative',
        zIndex:1,
        // backgroundColor:'rgb(21, 21, 104)',
        backgroundImage: `url(${vishak})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        '&::after':{
            content:'""',
            height: '100%',
            width:"100%",
            position: 'absolute',
            top:0,
            left:0,
            right:0,
            bottom:0,
            backgroundColor:'rgb(28 19 92 / 85%)',
            zIndex:-2
        },
        
    },
    firstContainer:{
        display:"flex",
        flexFlow:"column",
        justifyContent:"space-around",
        alignItems:"flex-start",
        paddingTop:"110px",
        '@media(max-width:780px)':{
            paddingTop:"80px",
        }
    },
    HelloText:{
        color:'#fff',
        padding:'20px 0',
        '@media(max-width:780px)':{
            fontSize:'40px'
        }
        
    },
    helloPara:{
        '@media(max-width:780px)':{
            width:'300px',
            fontSize:"10px"
        }
    },
    ProfilePaper:{
        display:"flex",
        flexFlow:"column",
        alignItems:"center",
        padding:'30px 0',
        marginTop:"-60px",
        // left:0,
        zIndex:99,
        // width:'100%'
        // backgroundColor:"red",
    },
    profileWrapper:{
        width:'260px',
        height:"260px",
        marginTop:'-80px',
        zIndex:99,
        '& img':{
            width:'100%',
            height:'100%',
            objectFit:"cover",
            borderRadius:'50%',
        }
    },
    ConnectMessage:{
        display:'flex',
        justifyContent:"space-between"
    },
    notification:{
        display:"flex"
    },
    listItem:{
        color:'grey !important',
        fontSize:"30px !important",
        fontWeight:"700 !important"
    }
})
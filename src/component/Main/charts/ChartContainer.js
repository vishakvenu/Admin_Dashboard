import { Card,Typography ,Divider, IconButton, Tooltip} from "@mui/material";
import { useStyles } from "../../MuiStyles/MuiStyles";
import LoopIcon from '@mui/icons-material/Loop';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditIcon from '@mui/icons-material/Edit';
// import Charts from './chart';
import './chartContainer.css'


const ChartContainer = ({Component,captionText,className,spanVal,MainText,bottomAreaText}) => {
    const classes=useStyles()

   
    return (
        <>
        <Card className="chartCard" >
            <div className="ChartWrapper">
            <div className="charts" >
                <Component className={classes.chartsContent} />
            </div>
            </div>
            
            <div className="chart-Icons">
            <Tooltip title="Refresh">
            <IconButton className={classes.loopIcon} >
            <LoopIcon  fontSize="small" />
            </IconButton>
            </Tooltip>
           <Tooltip title="Edit">
           <IconButton  className={classes.loopIcon}>
            <EditIcon fontSize="small"/>
            </IconButton>
           </Tooltip>
            
            
            </div>

            <Typography variant="subtitle1" style={{padding:"10px 0",fontWeigth:'400px !important'}} color="#616161">{captionText}</Typography>
            <Typography variant="body2" color="#757575">
            {spanVal?(<span className={className?className:''} >{spanVal}</span>):null} {MainText}</Typography>
            <Divider style={{margin:"12px 0"}}/>
            <div className="bottom-Area">
            <AccessTimeIcon fontSize="small" style={{color:"gray",marginRight:"3px"}}/>
            <Typography variant="caption" color="#9e9e9e">{bottomAreaText}</Typography>
            </div>
            
        </Card>
            
        </>
    );
};


export default ChartContainer ;
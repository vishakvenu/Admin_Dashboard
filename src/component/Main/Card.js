import { Card as MuiCards, CardActions, CardContent, Typography, Divider } from "@mui/material";
import { useStyles } from "../MuiStyles/MuiStyles";
import './Crad.css'
const Card = (props) => {
    const classes=useStyles(props)
    const {Icon,color,text,amountText,BottomIcon,bottomText,redOnly}=props
    return (
        <div>
     <MuiCards sx={{ minWidth: 210 }} className={classes.card} >
      <CardContent className="adjuster">
      <div className="card-header">
        <div className="Icon-wrapper">
        <div className="Icons">
        <Icon fontSize="large" color={color} className={classes.Icon} />
        </div>
        
        </div>
        <div className="text">
          <Typography variant="body">{text}</Typography>
          <Typography variant="h5" style={{paddingTop:"10px"}}>{amountText}</Typography>
        </div>
      </div>

      </CardContent>
      <Divider className={classes.divider} />
      <CardActions>
      <BottomIcon className={redOnly} style={{marginRight:'4px'}}/><span style={{fontSize:"14px"}}>{bottomText}</span>
      </CardActions>
     
    </MuiCards> 
        </div>
    );
};


export default Card;
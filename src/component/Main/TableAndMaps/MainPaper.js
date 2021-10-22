import { Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "../../MuiStyles/MuiStyles";
import MapInDec from './MapInDec'
import LanguageIcon from '@mui/icons-material/Language';
import './MainPaper.css'
import TableData from "./TableData";
const MainPaper = () => {
    const classes=useStyles()
    return (
        <Paper elevation={1} className={classes.paper}>
        <div className="table-header">
                        <LanguageIcon className={`${classes.tableIcon} table-header-icon`} />
                    </div>
                    <Typography variant="h5" className={classes.tableHeader}>Global Sales by Top Locations</Typography>
           <Grid container style={{padding:'25px 18px'}}>
           
                <Grid item xs={12} sm={12} md={4} lg={6} >
                <TableData />
                </Grid>
                <Grid item cs={12} sm={12} md={8} lg={6}>
                    <MapInDec />
                </Grid>
           </Grid>
        </Paper>
    );
};


export default MainPaper;
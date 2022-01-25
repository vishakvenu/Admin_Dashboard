import {
  Container,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import NavBar from "../Main/NavBar";
import { useStyles } from "../MuiStyles/profileMuiStyles";
import vishak from "../../assets/vishak.jpg";
import "./profile.css";

const ProfileConatiner = ({ clickHanlder }) => {
  const classes = useStyles({});
  return (
    <>
      <nav style={{ padding: "5px 0" }}>
        <Container>
          <NavBar clickHanlder={clickHanlder} text="Profile" />
        </Container>
      </nav>
      <div className={classes.helloContainer}>
        <Container className={classes.firstContainer}>
          <Typography variant="h1" className={classes.HelloText} sx={{textTransform:"uppercase"}}>
            Hello vishak
          </Typography>
          <Typography
            sx={{ maxWidth: "900px",lineHeight:"2",fontSize:"16px" }}
            variant="overline"
            color="#fff"
            className={classes.helloPara}
          >
            This is your profile page. You can see the progress you've made with
            your work and manage your projects or assinged tasks. when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </Typography>
          <Button
            sx={{ marginTop: "25px", marginLeft: 0, marginRight: 0,color:"#fff",backgroundColor:"rgb(34, 122, 145)",padding:'15px 25px' }}
            
          >
            Edit Profile
          </Button>
        </Container>
      </div>
      <Container>
        <Paper elevation={4} className={classes.ProfilePaper}>
          <div className={classes.profileWrapper}>
            <img src={vishak} alt="profile-pic" />
          </div>
          <div className={classes.ConnectMessage}>
            <Button variant="contained" sx={{ mx: "10px", my: "10px" }}>
              Connect
            </Button>
            <Button variant="outlined" sx={{ mx: "10px", my: "10px" }}>
              Message
            </Button>
          </div>
          <List className={classes.notification}>
            <ListItem
              sx={{ dislay: "flex", flexFlow: "column", textAlign: "center" }}
            >
              <ListItemText primary="22" secondary="Friends" />
            </ListItem>
            <ListItem
              sx={{ dislay: "flex", flexFlow: "column", textAlign: "center" }}
            >
              <ListItemText primary="10" secondary="Photos" />
            </ListItem>
            <ListItem
              sx={{ dislay: "flex", flexFlow: "column", textAlign: "center" }}
            >
              <ListItemText primary="89" secondary="Commnets" />
            </ListItem>
          </List>
          <Typography variant="h4">
            VISHAK TV <span style={{ color: "grey" }}>27</span>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "grey" }}>
            Tripunithura, Ernakulam
          </Typography>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography variant="h5">Front End Developer -Fresher</Typography>
          <Typography variant="subtitle1">
            University of Computer Science
          </Typography>
          <Divider light sx={{ margin: "10px 0" }} />
          <Typography
            variant="body1"
            align="center"
            color="rgb(155, 155, 155);"
          >
            Vishak- The name taken by Melbourne raise Brooklyn based Nick
            murphy-
            <br /> writes,performs and records all of his own music
          </Typography>

          <a href="/showmore" style={{ color: "blue" }}>
            Show more
          </a>
        </Paper>
      </Container>
    </>
  );
};

export default ProfileConatiner;

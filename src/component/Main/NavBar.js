import {
  Badge,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { liNotificationData, AccntList } from "../../Data";
import "./NavBar.css";
import { useStyles } from "../MuiStyles/MuiStyles";
import { useEffect, useRef, useState } from "react";

const NavBar = ({ clickHanlder ,text}) => {
  const [showList, setShowList] = useState(false);
  const [showSecList, setShowSecList] = useState(false);
  const classes = useStyles();
  const showRef = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.tagName !== "BUTTON" &&
        e.target.tagName !== "path" &&
        e.target.tagName !== "svg"
      ) {
        setShowList(false);
        setShowSecList(false);
      }
    });
  });

  const showListFunc = () => {
    setShowList((prev) => !prev);
    setShowSecList(false);
  };

  const showAccntSec = () => {
    setShowSecList((prev) => !prev);
    setShowList(false);
  };

  return (
    <nav className="Main-navbar" >
      <Typography variant="h4" className="DashboardText">
        {text}
      </Typography>

      <div className="Search-Icons">
        <div className="search-bar">
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            className={classes.searchField}
          />
          <Button>
            <SearchIcon fontSize="large" />
          </Button>
        </div>

        <div className="notifications" ref={showRef}>
          <Button onClick={showListFunc} className="notificationIcon">
            <Badge
              badgeContent={4}
              color="primary"
              className="notificationBadgeIcon"
            >
              <NotificationsIcon
                fontSize="large"
                className="notificationInnerIcon"
              />
            </Badge>
          </Button>
          {showList && (
            <List className="notification-list">
              {liNotificationData.map((item) => (<>
                <ListItem key={item.id}>
                  <ListItemText primary={item.text} />
                </ListItem>
                <Divider  />
                </>
              ))}
            </List>
          )}

          <IconButton className="AccountIcon" onClick={showAccntSec}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          {showSecList && (
            <List className="notification-list">
              {AccntList.map((item) => (
                  <>
                <ListItem style={{padding:'5px 0',textAlign:"center"}}>
                  <ListItemText primary={item.text} />
                </ListItem>
                <Divider  />
                </>
              ))}
            </List>
          )}
        </div>
      </div>
      <div className="humberger">
        <IconButton onClick={clickHanlder}>
          <MenuIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;

import { Container } from "@mui/material";
import NavBar from "../Main/NavBar";


const ProfileConatiner = ({clickHanlder}) => {
    return (
        <>
        <nav style={{padding:'5px 0'}}>
        <Container >
        <NavBar clickHanlder={clickHanlder} text="Profile"/>
         </Container>
         </nav>
         <div style={{height:'600px',width:'100%',backgroundColor:'tomato'}}></div>
        </>
    );
};

export default ProfileConatiner;
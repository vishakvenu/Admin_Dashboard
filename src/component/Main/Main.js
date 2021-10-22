// import MapInDec fro./MapInDec/MapInDecDec";
import NavBar from "./NavBar";
import { Container, Grid, Typography } from "@mui/material";
import { useStyles } from "../MuiStyles/MuiStyles";
import { cards, dataForCharts,ImageCharts as ImageData } from "../../Data";
import Card from "./Card";
import MainPaper from "./TableAndMaps/MainPaper";
import ChartContainer from "./charts/ChartContainer";
import ImageCharts from "./ImageCharts/ImageCharts";

const Main = ({ clickHanlder }) => {
  const classes = useStyles();

  return (
    <div className="Main">
      <Container maxWidth="lg">
        <NavBar clickHanlder={clickHanlder} />

        <Grid container spacing={2} className={classes.main}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={card.amountText} >
              <Card
                color={card.color}
                text={card.text}
                amountText={card.amountText}
                Icon={card.Icon}
                BottomIcon={card.bottomIcon}
                bottomText={card.bottomText}
                redOnly={card.className ? "redOnly" : ""}
              />
            </Grid>
          ))}
        </Grid>
        <MainPaper />

        <Grid container className={classes.chart} spacing={3}>
          {dataForCharts.map((item) => (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}  key={item.id}>
              <ChartContainer
             
                Component={item.component}
                className={item.className}
                spanVal={item.spanVal}
                captionText={item.captionText}
                MainText={item.MainText}
                bottomAreaText={item.bottomAreaText}
              />
            </Grid>
          ))}

        </Grid>

          <Typography variant="h4" color="#616161" className={classes.ManageListings} sx={{fontWeight:300}}>Manage Listings</Typography>
        <Grid container style={{padding:"10px 0"}} spacing={3}>
          {ImageData.map(item=>(
            <Grid item xs={12} sm={4} md={4} ld={4} key={item.id}>
            <ImageCharts item={item} />
          </Grid>
          ))}
          
        </Grid>
      </Container>
    </div>
  );
};

export default Main;

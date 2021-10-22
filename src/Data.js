import FileCopyIcon from "@mui/icons-material/FileCopy";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import StoreIcon from "@mui/icons-material/Store";
import TwitterIcon from "@mui/icons-material/Twitter";
import WarningIcon from "@mui/icons-material/Warning";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import UpdateIcon from "@mui/icons-material/Update";
import Charts from "./component/Main/charts/chart";
import Chart2 from "./component/Main/charts/chart2";
import Chart3 from "./component/Main/charts/Chart3";
import Apartments from "./assets/Apartment.jpg";
import Apartments2 from "./assets/Apartment2.jpg";
import Apartments3 from "./assets/Apartment3.jpg";

export const liNotificationData = [
  { text: "Mike john responded", id: 1 },
  { text: "You have 5 Tasks", id: 2 },
  { text: "you are now friend with ria", id: 3 },
  { text: "Another notification", id: 4 },
  { text: "Another one", id: 5 },
];

export const AccntList = [
  {
    text: "Profile",
    id: 1,
  },
  {
    text: "Log in",
    id: 2,
  },
  {
    text: "sign out",
    id: 3,
  },
];

export const cards = [
  {
    Icon: FileCopyIcon,
    text: "Used Space",
    amountText: "$49.50",
    color: "#F57E00",
    bottomIcon: WarningIcon,
    bottomText: "Get more space",
    className: "redOnly",
    id: 1,
  },
  {
    Icon: StoreIcon,
    text: "Revenue",
    amountText: "$65,456",
    color: "#55D941",
    bottomIcon: DateRangeIcon,
    bottomText: "Last 24 Hours",
    id: 2,
  },
  {
    Icon: PriorityHighIcon,
    text: "Fixed Issues",
    amountText: "75",
    color: "#FF4A48",
    bottomIcon: LocalOfferIcon,
    bottomText: "Tracked from Github",
    id: 3,
  },
  {
    Icon: TwitterIcon,
    text: "Followers",
    amountText: "200+",
    color: "#27B0BA",
    bottomIcon: UpdateIcon,
    bottomText: "Just Updated",
    id: 4,
  },
];

export let dataForCharts = [
  {
    component: Chart2,
    className: "green",
    id: 1,
    spanVal: "55%",
    captionText: "Daily Sales",
    MainText: "increase in today sales",
    bottomAreaText: "Updated 4 minutes ago",
  },
  {
    component: Charts,
    id: 2,
    captionText: "Email Subscriptions",
    MainText: "Last Campaign Performance",
    bottomAreaText: "Campaign sent 2 days ago",
  },
  {
    component: Chart3,
    id: 3,
    captionText: "Completed Tasks",
    MainText: " Last Campaign Performance",
    bottomAreaText: "Campaign sent 2 days ago",
  },
];

export const ImageCharts = [
  {
    id: 1,
    Image: Apartments,
    HotelName: "Cozy 5 Stars Apartment",
    HotelDescription: `The place is close to Barceloneta Beach and bus stop just 2 min by walk
    and near to "Naviglio" where you can enjoy the main night life in
    Barcelona.`,
    RatePerNight: `$899/night`,
    location: `Barcelona, Spain`,
  },
  {
    id: 2,
    Image: Apartments2,
    HotelName: "Office Studio",
    HotelDescription: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.`,
    RatePerNight: `$1.119/night`,
    location: `London, UK`,
  },
  {
    id: 3,
    Image: Apartments3,
    HotelName: "Beautiful Castle",
    HotelDescription: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.`,
    RatePerNight: `$459/night`,
    location: `Milan, Italy`,
  },
];

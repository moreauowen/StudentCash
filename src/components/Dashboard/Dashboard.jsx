import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Container,
  Grid,
  Card,
} from "@mui/material";
import { MdSpaceDashboard, MdAttachMoney } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import Logo from "../Logo/Logo";

export const Dashboard = () => {
  const sidebarWidth = 300;
  const logoSize = (sidebarWidth / 6.4) * 0.8; //I want this gone

  const navigationItems = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard color="white" />,
      path: "/dash",
    },
    {
      title: "Budget",
      icon: <MdAttachMoney color="white" />,
      path: "/budget",
    },
    {
      title: "Reports",
      icon: <IoDocumentsSharp color="white" />,
      path: "/reports",
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "primary.main",
            color: "primary.light",
            width: `${sidebarWidth}px`,
          },
        }}
      >
        <Logo size={logoSize} color={"white"} margin={5}/>
        <Divider />
        <List>
          {navigationItems.map((item, index) => (
            <ListItem button key={item.title}>
              <ListItemIcon color="white">{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          width: "calc(100% - sidebarWidth)",
          marginLeft: `${sidebarWidth}px`,
          height: "100%",
        }}
      >
          <Grid
            component={Container}
            padding='24px'
            height='100%'
            spacing={2}
          >
              <Grid 
                item
                component={Card}
              >
                  Welcome, name
              </Grid>
          </Grid>
      </Box>
    </Box>
  );
};

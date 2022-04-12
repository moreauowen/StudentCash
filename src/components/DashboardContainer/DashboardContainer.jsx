import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Container
} from "@mui/material";
import { MdSpaceDashboard, MdAttachMoney } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const sidebarWidth = 300;
  const logoSize = (sidebarWidth / 6.4) * 0.8; //I want this gone
  // const dashboardSpacing = 6;

  const navigationItems = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard color="white" />,
      path: "/dashboard",
    },
    {
      title: "Budget",
      icon: <MdAttachMoney color="white" />,
      path: "/budget",
    },
    {
      title: "Reports (coming soon)",
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
        <Logo size={logoSize} color={"white"} marginY={1} />
        <Divider />
        <List>
          {navigationItems.map((item) => (
            <ListItem button key={item.title}>
              <ListItemIcon color="#ffffff">{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key="profile">
            <ListItemIcon><FiUser color="white"/></ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          marginLeft: `${sidebarWidth}px`,
          height: "100%",
          bgcolor: "#fafafa",
        }}
      >
        <Container maxWidth={true}>
            <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;

import React from "react";
import MenuOption from "./MenuOption";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const handleNews = () => {
    navigate("/news");
  };

  const handleHome = () => {
    navigate("/dashboard");
  };

  // Check the current path
  const isActive = (path) => location.pathname === path;

  return (
    <BoxComponent
      width="15%"
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="var(--light)"
    >
      <BoxComponent
      display='flex'
      flexDirection="column"
      >
        <MenuOption
          onClick={handleHome}
          icon={DashboardOutlinedIcon}
          label="Dashboard"
          active={isActive("/dashboard")} // Pass the active state
        />
        <MenuOption
          onClick={handleNews}
          icon={ArticleIcon}
          label="News"
          active={isActive("/news")} // Pass the active state
        />
        <MenuOption
          onClick={handleAdmin}
          icon={GroupOutlinedIcon}
          label="Admins"
          active={isActive("/admin")} // Pass the active state
        />
      </BoxComponent>
      <BoxComponent
        display="flex"
        alignItems="center"
        justifyContent="left"
        height="6vh"
        padding="5px 10px"
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={handleLogout}
      >
        <LogoutIcon />
        <TypographyComponent marginLeft="15px" color="var(--dark)">
          Logout
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}

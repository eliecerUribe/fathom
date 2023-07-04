import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const onLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1">Hi, {user?.name}</Typography>
        <Button color="inherit" onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

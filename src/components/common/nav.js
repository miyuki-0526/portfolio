import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { setTargetElement } from "../../redux/slices/scrollSlise";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navList = [
  { targetId: "About", text: "About me" },
  { targetId: "Works", text: "Works" },
  { targetId: "Skills", text: "Skills" },
  { targetId: "Career", text: "Career history" },
  { targetId: "Contact", text: "Contact" },
];

const ScrollButton = ({ targetId, text }) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(setTargetElement(targetId))}
      color="secondary"
      size="large"
    >
      {text}
    </Button>
  );
};

const TemporaryDrawer = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navList.map((obj, index) => (
          <ListItem key={obj} disablePadding>
            <ListItemButton
              onClick={() => dispatch(setTargetElement(obj.targetId))}
            >
              <ListItemText primary={obj.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button
        color="secondary"
        size="large"
        onClick={toggleDrawer("top", true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <Box className="only-bigger-sp">
        {navList.map((obj, index) => (
          <ScrollButton
            key={obj.targetId}
            targetId={obj.targetId}
            text={obj.text}
          />
        ))}
      </Box>
      <Box className="only-sp">
        <TemporaryDrawer />
      </Box>
    </>
  );
};
export default Nav;

import * as React from "react";
import Button from "@mui/material/Button";
import { setTargetElement } from "../../redux/slices/scrollSlise";
import { useDispatch } from "react-redux";

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

const Nav = () => {
  return (
    <>
      <ScrollButton targetId="About" text="About me" />
      <ScrollButton targetId="Works" text="Works" />
      <ScrollButton targetId="Skills" text="Skills" />
      <ScrollButton targetId="Career" text="Career history" />
      <ScrollButton targetId="Contact" text="Contact" />
    </>
  );
};
export default Nav;

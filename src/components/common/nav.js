import * as React from "react";
import Button from "@mui/material/Button";
import { setTargetElement } from "../../redux/slices/scrollSlise";
import { useDispatch } from "react-redux";

const ScrollButton = ({ targetId, text }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(setTargetElement(targetId))}>{text}</Button>
  );
};

const Nav = () => {
  return (
    <>
      <ScrollButton targetId="aaa" text="About me" />
      <ScrollButton targetId="bbb" text="Works" />
      {/* <Button onClick={handleClick} id="aaa">
        About me
      </Button>
      <Button onClick={handleClick} id="bbb">
        Works
      </Button> */}
      <Button>Skills</Button>
      <Button>Design</Button>
      <Button>My plofile</Button>
    </>
  );
};
export default Nav;

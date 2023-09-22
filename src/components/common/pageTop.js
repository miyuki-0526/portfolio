import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Box, Button } from "@mui/material";
import { setTargetElement } from "../../redux/slices/scrollSlise";
import { useDispatch } from "react-redux";

const PageTop = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      className={
        props.dispStatus
          ? "page-top-button opacity-1"
          : "page-top-button opacity-0"
      }
      onClick={() => dispatch(setTargetElement("Top"))}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </Button>
  );
};
export default PageTop;

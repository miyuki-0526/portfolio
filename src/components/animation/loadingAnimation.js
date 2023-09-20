import { Grid } from "react-loader-spinner";
import { CssBaseline, Box, Container } from "@mui/material";
const LoadingAnimation = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" className="loading-animetion-background">
        <Box className="loading-animetion-wrapper">
          <Grid
            height="80"
            width="80"
            color="#1992dd"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="loading-animetion"
            visible={true}
          />
        </Box>
      </Container>
    </>
  );
};
export default LoadingAnimation;

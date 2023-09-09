import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="p" gutterBottom>
          Copyright © 2023 Miyuki
        </Typography>
      </Box>
    </Container>
  );
}

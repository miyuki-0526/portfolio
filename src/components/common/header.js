import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <header>
      <section>
        <div className="logo_wrap">
          <Typography variant="h1" gutterBottom>
            aaaaa
            <img src="aaa" />
          </Typography>
        </div>
        <div className="menu">
          <Button>About me</Button>
          <Button>Works</Button>
          <Button>Skills</Button>
          <Button>Design</Button>
          <Button>My plofile</Button>
        </div>
      </section>
    </header>
  );
}

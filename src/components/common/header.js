import * as React from "react";
import Typography from "@mui/material/Typography";
import Nav from "./nav.js";

export default function Header() {
  return (
    <header>
      <section>
        <div className="logo_wrap">
          <Typography variant="h1" gutterBottom>
            Miyuki.T
          </Typography>
        </div>
        <div className="menu">
          <Nav />
        </div>
      </section>
    </header>
  );
}

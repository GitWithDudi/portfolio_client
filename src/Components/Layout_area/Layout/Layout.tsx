import { NavBar } from  "../NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";


export function Layout(): React.JSX.Element {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

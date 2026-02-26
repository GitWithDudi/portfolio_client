import { NavBar } from "../NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export function Layout(): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

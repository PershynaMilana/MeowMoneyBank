import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/UI/Navbar";

export default function DefaultLayout() {
  //TODO: Add logic to check for an authenticated user

  return (
    <div>
      <MainNavbar />
      <Outlet />
    </div>
  );
}

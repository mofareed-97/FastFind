import React, { ReactNode } from "react";
import AppNavbar from "./Navbar";

interface IProps {
  children: ReactNode;
}
const AppLayout = () => {
  return (
    <>
      <AppNavbar />
    </>
  );
};

export default AppLayout;

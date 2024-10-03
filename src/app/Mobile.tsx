"use client";

import React, { useState } from "react";
import Navbar from '../components/Nav/Navbar';
import SideDrawer from '../components/Nav/SideNav';

 
 

function Mobile() {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawer(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer);
  };
  return (
    <div>
      <Navbar openSideDrawer={sideDrawerToggleHandler} open={showSideDrawer} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
    </div>
  );
}

export default Mobile;

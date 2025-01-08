import { useState } from "react";
import SideBar from "./SideBar";

export default function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function handleSidebar() {
    setIsSidebarVisible((prevValue) => !prevValue);
  }

  return (
    <header>
      <img
        className="sidebar-btn"
        src="/bars-solid.svg"
        height={30}
        style={{ position: "absolute ", left: "20px", cursor: "pointer" }}
        onClick={handleSidebar}
      />
      <img src="/kitchen-set-solid.svg" alt="chef logo" className="chef-logo" />
      <span className="app-title">Chef-AI</span>
      <SideBar toggle={isSidebarVisible ? "0" : "-250px"} />
    </header>
  );
}

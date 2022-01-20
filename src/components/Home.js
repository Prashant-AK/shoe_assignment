import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Style.css";
function Home() {
  return (
    <div className="box_container">
      <Header />

      <div className="mainbox">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Home;

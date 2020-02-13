import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import smoke from "./smoke.mp4";

function OpenPage() {
  return (
    <div id="openPage">
      <body>
        <video autoPlay muted className="video">
          <source type="video/mp4" src={smoke}></source>
        </video>
        <h2 className="opening">
          <Link
            to="./content/playground"
            style={{ textDecoration: "none", color: "#ddd" }}
          >
            <span>W</span>
          </Link>
          <span>el</span>
          <span>come</span>
          <span> to </span>
          <span>Sou</span>
          <span>rce</span>
          <span> Academy</span>
        </h2>
      </body>
    </div>
  );
}

export default OpenPage;

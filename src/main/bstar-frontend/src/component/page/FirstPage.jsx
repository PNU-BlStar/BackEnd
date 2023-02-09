import { useNavigate } from "react-router-dom";
import React from "react";

import MainPageContent from "../ui/MainPageContent";
import "./FirstPage.css";

function FirstPage(props) {
  const navigate = useNavigate();

  return (
    <div class="container">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>@WebDesignerMag</title>
         <g stroke="none" fill="white" fill-rule="evenodd" fill-opacity="0"> 
          <text
            id="@WebDesignerMag"
            stroke="white"
            fill="rgb(95, 196, 236)"
            font-weight="normal"
            font-family="Playfair Display, serif"
            // font-size="80"
            font-size="5vw"
          >
            <tspan x="50" y="109" class="welcome">
              <tspan> </tspan>
              <tspan>W</tspan>
              <tspan>e</tspan>
              <tspan>l</tspan>
              <tspan>c</tspan>
              <tspan>o</tspan>
              <tspan>m</tspan>
              <tspan>e</tspan>
              <tspan> </tspan>
              <tspan>t</tspan>
              <tspan>o</tspan>
              <tspan> </tspan>
              <tspan>t</tspan>
              <tspan>h</tspan>
              <tspan>e</tspan>
            </tspan>


            <tspan x="250" y="280" className="bstar" fontSize={"15vw"}>
              <tspan>B</tspan>
              <tspan>s</tspan>
              <tspan>t</tspan>
              <tspan>a</tspan>
              <tspan>R</tspan>
            </tspan>
          </text>
        </g> 
      </svg>
      <div>
        <button
        className="SLbutton"
        type="submit"
        variant="outlined"
        onClick={() => {
          navigate("login");
        }}
      >
        Login / Sign Up
      </button>
      <p className="joinUs">To Join Us !</p>
      </div>

      
    </div>
  );
}

export default FirstPage;

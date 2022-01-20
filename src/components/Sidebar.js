import React from "react";
import "./Style.css";
import "./Slider.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_row1">row 1 </div>
      <div className="sidebar_row2">
        <h4> Price Range</h4>
        <section class="range-slider">
          <span class="rangeValues"></span>
          <input value="500" min="500" max="50000" step="500" type="range" />
          <input value="50000" min="500" max="50000" step="500" type="range" />
        </section>
      </div>
      <div className="sidebar_row3">
        <h4>Size</h4>
        <section>
          <button>35</button>
          <button>36</button>
          <button>37</button>
          <button>38</button>
          <button>39</button>
          <button>40</button>
          <button>35</button>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;

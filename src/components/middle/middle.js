import React, { useEffect, useState } from "react";
import Tags from "./tags";
import "./middle.css";

const Middle = () => {
  const [box, setBox] = useState();
  useEffect(() => {
    setBox(document.querySelector(".products"));
  }, []);

  const data = ["Great For Groups", "Family Friendly", "Animals", "Arts & Writing", "Baking", "Cooking","Dance","Drinks",
                    "Entertainment","Fitness", "History & Culture", "Magic", "Music", "Social impact", "Wellness", 
                    "Olympians & Paralympians", "Designed for accessibility"
                ];

  let prev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - parseInt(width/3);
  };
  let next = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + parseInt(width/3);
  };
  return (
    <div className="main">
      <div className="default-btn">
        <button>Dates</button>
        <button>Group Size</button>
        <button>More Filters</button>
      </div>
      <div className="prod-list">
        <div>
          <button className="pre" onClick={() => prev()}>&lt;</button>
        </div>
        <div className="products">
          {data.map((value) => (
            <div>
              <Tags prod={value} />
            </div>
          ))}
        </div>
        <div className="prod-nxt">
            <div>
            <button className="nxt" onClick={() => next()}>&gt;</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;

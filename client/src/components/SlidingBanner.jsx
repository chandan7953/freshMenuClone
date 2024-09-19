import React from "react";
import slidingBanner1 from "../assets/slidingBanner1.svg";
import slidingBanner2 from "../assets/slidingBanner2.svg";
import slidingBanner3 from "../assets/slidingBanner3.svg";

const packData = [
  {
    url: slidingBanner1,
  },
  {
    url: slidingBanner2,
  },
  {
    url: slidingBanner3,
  },
];

export default function SlidingBanner() {
  return (
    <div className="slidingBanner-container">
      <div className="slidingBanner-slider">
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {packData.map((pack, index) => (
              <div key={index} className="slidingBanner-card">
                <img src={pack.url} alt={pack.title} className="w-full" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import BackgroundSlider from "react-background-slider";
import image1 from "./img/bg.png";
import image2 from "./img/bg1.png";
import image3 from "./img/bg2.jpg";
import image4 from "./img/bg3.jpeg";
import image5 from "./img/bg4.jpg";
import './slider.scss';
function slider() {
  return (
    <div className="slider">
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5]}
        duration={10}
        transition={2}
      />
    </div>
  );
}

export default slider;

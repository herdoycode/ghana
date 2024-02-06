import React from "react";
import Ghana from "./ghana/page";
import { GoogleAnalytics } from "@next/third-parties/google";

const Gallery = () => {
  return (
    <div>
      <Ghana />
      <GoogleAnalytics gaId="G-7335C4Y82J" />
    </div>
  );
};

export default Gallery;

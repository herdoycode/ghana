import { Metadata } from "next";
import Ghana from "./ghana/page";

const Gallery = () => {
  return (
    <div>
      <Ghana />
    </div>
  );
};

export const metadata: Metadata = {
  title: "A journey through our Wiston Salem Gallery.",
  description:
    "Experience the artistic soul of Winston-Salem at our gallery, showcasing a diverse array of local and regional artists. From the beautiful donation photos all over the city to the wonderful people.",
  keywords: "Beyond the classroom Horizons, Food Security",
};

export default Gallery;

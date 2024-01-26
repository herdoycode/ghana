"use client";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "./page.scss";

const GalleryPage = () => {
  const [mImg, setMImg] = useState<string>("/g/g-1.jpg");
  const [isV, setV] = useState<boolean>(false);
  const gs = [
    { id: 1, url: "/g/g-1.jpg" },
    { id: 2, url: "/g/g-2.jpg" },
    { id: 3, url: "/g/g-3.jpg" },
    { id: 4, url: "/g/g-4.jpg" },
    { id: 5, url: "/g/g-5.jpg" },
    { id: 6, url: "/g/g-6.jpg" },
    { id: 7, url: "/g/g-7.jpg" },
    { id: 8, url: "/g/g-8.jpg" },
  ];
  return (
    <div className="gallery-wrapper">
      {isV && (
        <div className="img-prev">
          <div className="img">
            <img src={mImg} alt="modal img" />
            <div onClick={() => setV(!isV)} className="m-close">
              <IoClose />
            </div>
          </div>
        </div>
      )}

      <div className="g-top">
        <h1>Gallery</h1>
        <p>Charity activities are taken place around the world.</p>
      </div>

      <div className="g-main">
        {gs.map((i) => (
          <div key={i.id} className="g-item">
            <img src={i.url} alt="g-item" />
            <div
              onClick={() => {
                setMImg(i.url);
                setV(true);
              }}
              className="hover"
            >
              <FiEye />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

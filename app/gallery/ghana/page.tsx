"use client";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Ghana = () => {
  const [mImg, setMImg] = useState<string>("/g/818.jpg");
  const [isV, setV] = useState<boolean>(false);
  const gs = [
    { id: 1, url: "/g/g18.jpg" },
    { id: 2, url: "/g/g1.jpg" },
    { id: 3, url: "/g/g2.jpg" },
    { id: 4, url: "/g/g3.jpg" },
    { id: 5, url: "/g/g5.jpg" },
    { id: 6, url: "/g/g6.jpg" },
    { id: 7, url: "/g/g7.jpg" },
    { id: 8, url: "/g/g8.jpg" },
    { id: 9, url: "/g/g9.jpg" },
    { id: 10, url: "/g/g10.jpg" },
    { id: 11, url: "/g/g11.jpg" },
    { id: 12, url: "/g/g12.jpg" },
    { id: 13, url: "/g/g13.jpg" },
    { id: 14, url: "/g/g14.jpg" },
    { id: 15, url: "/g/g15.jpg" },
    { id: 16, url: "/g/g16.jpg" },
    { id: 17, url: "/g/g17.jpg" },
  ];
  return (
    <div className="gallery-wrapper">
      <div className="container">
        <div className="video">
          <video controls>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/fire-api-b166b.appspot.com/o/west.mp4?alt=media&token=f6e00a36-d030-4355-8904-bd1cb0756371"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

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

export default Ghana;

"use client";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Africa = () => {
  const [mImg, setMImg] = useState<string>("/w/g-1.jpg");
  const [isV, setV] = useState<boolean>(false);
  const gs = [
    { id: 1, url: "/w/g-1.jpg" },
    { id: 2, url: "/w/g-2.jpg" },
    { id: 3, url: "/w/g-3.jpg" },
    { id: 4, url: "/w/g-4.jpg" },
    { id: 5, url: "/w/g-5.jpg" },
    { id: 6, url: "/w/g-6.jpg" },
    { id: 7, url: "/w/g-7.jpg" },
    { id: 8, url: "/w/g-8.jpg" },
  ];
  return (
    <div className="gallery-wrapper">
      <div className="container">
        <div className="video">
          <video controls>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/fire-api-b166b.appspot.com/o/show.mp4?alt=media&token=4e589182-9ec8-4e8f-80b1-afb5d602aee8"
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

export default Africa;

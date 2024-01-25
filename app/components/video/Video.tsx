import "./Video.scss";
const Video = () => {
  return (
    <div className="video-wrapper">
      <div className="container">
        <div className="video">
          <h2>Watch Now</h2>
          <video autoPlay controls width="100%">
            <source
              src="https://bridgeinthegap.org/wp-content/uploads/2023/08/WhatsApp-Video-2023-08-22-at-5.18.18-AM.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;

import "./Video.scss";
const Video = () => {
  return (
    <div className="video-wrapper">
      <div className="container">
        <div className="video">
          <h2>Watch Now</h2>
          <video controls width="100%">
            <source
              src="https://firebasestorage.googleapis.com/v0/b/fire-api-b166b.appspot.com/o/show.mp4?alt=media&token=4e589182-9ec8-4e8f-80b1-afb5d602aee8"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;

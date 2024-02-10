import { Container, Heading } from "@radix-ui/themes";

const Video = () => {
  return (
    <div className=" my-16 px-2">
      <Container>
        <div>
          <Heading as="h2" mb="6" size="7" align="center">
            Watch Now
          </Heading>
          <video controls width="100%">
            <source
              src="https://firebasestorage.googleapis.com/v0/b/fire-api-b166b.appspot.com/o/show.mp4?alt=media&token=4e589182-9ec8-4e8f-80b1-afb5d602aee8"
              type="video/mp4"
            />
          </video>
        </div>
      </Container>
    </div>
  );
};

export default Video;

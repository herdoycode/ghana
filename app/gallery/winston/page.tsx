import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";

const Winston = () => {
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
      <Flex align="center" justify="center" py="8">
        <video controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/fire-api-b166b.appspot.com/o/ghana.mp4?alt=media&token=cb1d8153-22e3-49fe-b7c2-008702eb2180"
            type="video/mp4"
          />
        </video>
      </Flex>

      <Grid
        columns={{ initial: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap="5"
      >
        {gs.map((i) => (
          <div key={i.id} className="g-item">
            <Dialog>
              <DialogTrigger>
                <Image width={600} height={400} src={i.url} alt="g-item" />
              </DialogTrigger>
              <DialogContent>
                <Image width={600} height={400} src={i.url} alt="g-item" />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Winston;

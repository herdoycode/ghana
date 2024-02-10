import { Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Ghana = () => {
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
    <div>
      <Flex align="center" justify="center" py="8">
        <video controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/fire-api-b166b.appspot.com/o/west.mp4?alt=media&token=f6e00a36-d030-4355-8904-bd1cb0756371"
            type="video/mp4"
          />
        </video>
      </Flex>

      <Grid
        columns={{ initial: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap="5"
      >
        {gs.map((i) => (
          <Dialog key={i.id}>
            <DialogTrigger>
              <Image width={600} height={400} src={i.url} alt="g-item" />
            </DialogTrigger>
            <DialogContent>
              <Image width={600} height={400} src={i.url} alt="g-item" />
            </DialogContent>
          </Dialog>
        ))}
      </Grid>
    </div>
  );
};

export default Ghana;

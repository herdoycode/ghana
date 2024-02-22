import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";

const Winston = () => {
  const gs = [
    { id: 1, url: "/w/g-1.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 2, url: "/w/g-2.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 3, url: "/w/g-3.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 4, url: "/w/g-4.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 5, url: "/w/g-5.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 6, url: "/w/g-6.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 7, url: "/w/g-7.jpg", alt: "Project image in Winston-Salem, NC" },
    { id: 8, url: "/w/g-8.jpg", alt: "Project image in Winston-Salem, NC" },
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
                <Image
                  width={600}
                  height={400}
                  className="h-[250px] object-cover"
                  src={i.url}
                  alt={i.alt}
                />
              </DialogTrigger>
              <DialogContent>
                <Image width={600} height={400} src={i.url} alt={i.alt} />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Winston;

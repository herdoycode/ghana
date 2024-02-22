import { Grid } from "@radix-ui/themes";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Porps {
  children: ReactNode;
}

const layout = ({ children }: Porps) => {
  return (
    <Grid columns={{ initial: "1fr", sm: "300px 1fr" }} px="2" py="8">
      <div className="bg-secondary px-2 py-4 hidden md:block">
        <Sidebar />
      </div>
      <div className="px-2 py-4">
        <div className="admin">{children}</div>
      </div>
    </Grid>
  );
};

export default layout;

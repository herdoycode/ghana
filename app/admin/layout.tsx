import { Grid } from "@radix-ui/themes";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Porps {
  children: ReactNode;
}

const layout = ({ children }: Porps) => {
  return (
    <Grid columns="300px 1fr" px="2" py="8">
      <div className="bg-secondary px-2 py-4">
        <Sidebar />
      </div>
      <div className="px-2 py-4">
        <div className="admin">{children}</div>
      </div>
    </Grid>
  );
};

export default layout;

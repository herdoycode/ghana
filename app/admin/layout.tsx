import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Porps {
  children: ReactNode;
}

const layout = ({ children }: Porps) => {
  return (
    <div className="admin-layout">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">{children}</div>
    </div>
  );
};

export default layout;

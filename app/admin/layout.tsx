import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import "./page.scss";

interface Porps {
  children: ReactNode;
}

const layout = ({ children }: Porps) => {
  return (
    <div className="admin-layout">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="admin">{children}</div>
      </div>
    </div>
  );
};

export default layout;

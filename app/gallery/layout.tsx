"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import "./layout.scss";

interface Props {
  children: ReactNode;
}

const GalleryPage = ({ children }: Props) => {
  const currentPath = usePathname();

  const projectsLink = [
    { id: 2, path: "/gallery/winston", label: "Winston-Salem, NC" },
    { id: 3, path: "/gallery", label: "Ghana,  West Africa" },
  ];

  return (
    <div className="gallery-wrapper">
      <div className="g-top">
        <h1>Gallery</h1>
        <p>Charity activities are taken place around the world.</p>
      </div>
      <div className="projects">
        {projectsLink.map((p) => (
          <Link key={p.id} href={p.path}>
            <button
              key={p.id}
              className={currentPath === p.path ? "btn active" : "btn"}
            >
              {p.label}
            </button>
          </Link>
        ))}
      </div>
      <div className="g-main">{children}</div>
    </div>
  );
};

export default GalleryPage;

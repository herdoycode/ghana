import Link from "next/link";
import Card from "./card";

export default function Sidebar() {
  return (
    <div className="md:border-l p-4 flex flex-col gap-6">
      <h1 className="text-3xl text-primary">Our Programs</h1>
      <Link href="/programs/womenempowerment">
        <Card
          image="/programs/women/1.jpg"
          title="Women Empowerment 2024"
          caption="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Link>
      <Link href="/programs/servingmeals">
        <Card
          image="/programs/meals/1.jpg"
          title="Preparing and serving meals"
          caption="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Link>
      <Link href="/programs/school">
        <Card
          image="/programs/school/1.jpg"
          title="Back to School 2024"
          caption="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />
      </Link>
    </div>
  );
}

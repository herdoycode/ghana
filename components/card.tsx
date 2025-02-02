import Image from "next/image";
interface Props {
  title: string;
  caption: string;
  image: string;
}
export default function Card({ title, caption, image }: Props) {
  return (
    <div className="rounded-3xl overflow-hidden border shadow-lg">
      <Image
        src={image}
        width={400}
        height={200}
        alt="image"
        className="w-full object-cover"
      />
      <div className="px-3 py-6">
        <h3 className="text-xl font-semibold text-primary"> {title} </h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";

const DonateButton = () => {
  return (
    <Link
      href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f"
      target="blank"
    >
      <div className="group flex items-center bg-white text-zinc-700 max-w-fit rounded-[30px] ps-2 hover:text-white hover:bg-primary transition-all border-primary border-2 hover:border-white">
        <button>Donate Now</button>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white ms-2 group-hover:text-primary group-hover:bg-white transition-all">
          <BsHeartFill />
        </div>
      </div>
    </Link>
  );
};

export default DonateButton;

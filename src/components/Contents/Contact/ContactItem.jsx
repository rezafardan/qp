import { PiArrowUpRightBold } from "react-icons/pi";

const ContactItem = ({ link, img, title, detail, className = "" }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex gap-2 p-1 group w-full h-full ${className}`}
  >
    <div className="py-2 px-5 flex items-center justify-center group-hover:bg-neutral-500 ease-in-out duration-500 shadow-lg transform translate-y-0 group-hover:-translate-y-1">
      {img}
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <span className="text-base tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
          {title}
        </span>
        <span className="transform group-hover:rotate-45 ease-in-out duration-500">
          <PiArrowUpRightBold size={20} />
        </span>
      </div>
      <span className="font-thin text-xs text-balance">{detail}</span>
    </div>
  </a>
);

export default ContactItem;

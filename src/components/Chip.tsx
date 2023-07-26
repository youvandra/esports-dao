export default function Chip({
  color,
  text,
  percentage,
}: {
  color: string;
  text: string;
  percentage?: string;
}) {
  return (
    <li className="relative text-black text-center w-[250px] md:w-[350px] justify-between pr-6 font-light text-sm md:text-xl py-4  flex pl-8">
      <svg
        viewBox="0 0 352 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 w-full h-full"
      >
        <path d="M1 22L29.5 1H351V35.5L320 53H1V22Z" stroke="black" />
        <path
          d="M35 4L39 1.5H29.5L1.5 22V52.5H5H7L7.5 24.5L29.5 8L35 4Z"
          fill={color}
        />
      </svg>
      <span>{text}</span>
      {percentage && <span>{percentage}</span>}
    </li>
  );
}

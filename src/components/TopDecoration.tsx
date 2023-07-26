export default function TopDecoration({
  color = "#F1F0EC",
}: {
  color?: "white" | "black" | "#F1F0EC";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 82"
      fill="none"
      className="absolute top-4 right-4 w-10  md:top-8 md:right-8 md:w-20 aspect-square"
    >
      <path
        d="M1 76.5V12L11.5 1H76.5C79.2614 1 81.5 3.23858 81.5 6V71L70.5 81.5H6C3.23858 81.5 1 79.2614 1 76.5Z"
        stroke={color}
        strokeOpacity="0.51"
      />
      <rect
        x="37"
        y="19"
        width="8"
        height="8"
        fill={color}
        fillOpacity="0.69"
      />
      <rect
        x="37"
        y="55"
        width="8"
        height="8"
        fill={color}
        fillOpacity="0.69"
      />
      <rect
        x="37"
        y="37"
        width="8"
        height="8"
        fill={color}
        fillOpacity="0.69"
      />
    </svg>
  );
}

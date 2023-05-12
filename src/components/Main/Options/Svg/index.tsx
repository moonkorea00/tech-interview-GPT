export const DropDownSVG = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
      />
    </svg>
  );
};

export const SelectSVG = () => {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      />
    </svg>
  );
};

export const FlickerSVG = () => {
  return (
    <svg
      viewBox="8 4 8 16"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block w-[10px] animate-flicker"
    >
      <rect x="10" y="6" width="4" height="11" fill="#000" />
    </svg>
  );
};

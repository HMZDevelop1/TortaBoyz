interface IconProps {
  className?: string;
}

export default function DoorDashIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="5.5" fill="#FF3008" />
      <path
        d="M6.5 12c0-3.3 2.5-5.5 5.5-5.5 3 0 5.5 2.2 5.5 5.5s-2.5 5.5-5.5 5.5c-3 0-5.5-2.2-5.5-5.5z"
        fill="white"
      />
      <path
        d="M13 8.5l2.8 3.5L13 15.5"
        stroke="#FF3008"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

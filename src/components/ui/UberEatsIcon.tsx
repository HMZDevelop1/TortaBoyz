interface IconProps {
  className?: string;
}

export default function UberEatsIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="5.5" fill="#06C167" />
      <path
        d="M7.2 7.2h2.4v5.8c0 1 .5 1.5 1.5 1.5h1.8c1 0 1.5-.5 1.5-1.5V7.2h2.4v5.9c0 2.1-1.3 3.5-3.7 3.5h-2.2c-2.4 0-3.7-1.4-3.7-3.5V7.2z"
        fill="white"
      />
    </svg>
  );
}

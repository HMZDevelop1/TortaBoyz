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
        d="M6.8 7.2h2.6v6.7c0 .8.4 1.2 1.2 1.2h2.8c.8 0 1.2-.4 1.2-1.2V7.2h2.6v6.9c0 2.2-1.4 3.7-3.8 3.7h-2.8c-2.4 0-3.8-1.5-3.8-3.7V7.2z"
        fill="white"
      />
    </svg>
  );
}

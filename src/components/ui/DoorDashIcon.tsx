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
      <circle cx="12" cy="12" r="10.5" fill="#FF3008" />
      <path
        fill="white"
        fillRule="evenodd"
        d="M7 8h5.5a3.5 3.5 0 0 1 0 8H7V8zM10.5 11h2a1.5 1.5 0 0 1 0 3h-2v-3z"
      />
    </svg>
  );
}

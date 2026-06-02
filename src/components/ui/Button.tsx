import { forwardRef } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost" | "light";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
  target?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs tracking-[0.15em]",
  md: "px-7 py-3 text-sm tracking-[0.12em]",
  lg: "px-9 py-3.5 text-sm tracking-[0.15em]",
  xl: "px-12 py-4 text-base tracking-[0.12em]",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-torta-white text-torta-black hover:bg-torta-gray-200 border border-transparent",
  outline:
    "bg-transparent text-torta-white border border-torta-white/30 hover:bg-torta-white hover:text-torta-black",
  ghost:
    "bg-transparent text-torta-white/60 border border-transparent hover:text-torta-white",
  light:
    "bg-torta-white/10 text-torta-white border border-torta-white/20 hover:bg-torta-white hover:text-torta-black",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      as: Component = "button",
      href,
      target,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const classes = `inline-flex items-center justify-center gap-2.5 font-semibold uppercase tracking-[0.12em] transition-all duration-300 rounded-full active:scale-[0.97] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    if (Component === "a" && href) {
      return (
        <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

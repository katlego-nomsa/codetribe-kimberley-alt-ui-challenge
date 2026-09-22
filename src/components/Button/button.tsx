import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary" | "light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  icon,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button className={`btn btn--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;
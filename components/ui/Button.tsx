"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-white";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-[#1B6E90] text-white hover:bg-[#2B8FAD] shadow-lg hover:shadow-xl",
    secondary:
      "bg-[#3DBFAA] text-white hover:bg-[#0090CC] shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-[#1B6E90] text-[#1B6E90] hover:bg-[#1B6E90] hover:text-white",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-[#1B6E90]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

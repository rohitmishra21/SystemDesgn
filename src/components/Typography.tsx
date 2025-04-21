import React from "react";

export type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
  children: React.ReactNode;
  className?: string;
};

const baseStyles: Record<string, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base",
  label: "text-sm font-medium",
};

export const Typography = ({ variant, children, className }: TypographyProps) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return <Tag className={`${baseStyles[variant]} ${className}`}>{children}</Tag>;
};

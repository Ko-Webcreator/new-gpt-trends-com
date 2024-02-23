import React from "react";
import footer from "./footer.module.scss";

type Props = {
  className: string;
};

export const Footer = ({ className }: Props) => {
  return (
    <footer className={`${footer.wrap} ${className}`}>
      &copy; 2024 GPT Trends
    </footer>
  );
};

import React from "react";
import style from "./Button.module.scss";

export type ButtonProps = {
  label: string;
  fullwidth?: boolean;
  type?: "primary" | "secondary" | "danger" | "success" | "info";
  disabled?: boolean;
};

const Button = ({
  label,
  fullwidth = false,
  type = "primary",
  disabled = false,
}: ButtonProps) => {
  let mode: string;
  switch (type) {
    case "secondary": {
      mode = style.secondary;
      break;
    }
    case "danger": {
      mode = style.danger;
      break;
    }
    case "success": {
      mode = style.success;
      break;
    }
    case "info": {
      mode = style.info;
      break;
    }
    default: {
      mode = style.primary;
      break;
    }
  }
  const width = fullwidth ? style.fullwidth : "";

  return (
    <button className={[style.btn, mode, width].join(" ")} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

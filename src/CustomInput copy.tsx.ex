import React, { ChangeEvent, useCallback } from "react";

import { InputType } from "./types";

import "./inputs.css";

interface CustomInputProps {
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  width?: string;
  type?: InputType;
  placeholder?: string;
  errorText?: string | null;
  textColor?: string;
  borderRadius?: string;
  noLeadingSpaces?: boolean;
  unitLabel?: string;
  separateThousands?: boolean;
  borderColor?: string;
  id?: string;
  bgColor?: string;
  shadowColor?: string;
  paddingSize?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  errorText,
  unitLabel,
  id,
  shadowColor,
  textColor = "black",
  width = "100%",
  type = "text",
  borderRadius = "4px",
  noLeadingSpaces = false,
  separateThousands = false,
  borderColor = "black",
  bgColor = "white",
  paddingSize = 10,
}) => {
  const handleSeparateThousands = useCallback((value: string | number) => {
    if (!value) return value;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | number = event.target.value;

    if (type === "number") {
      value = Number(value ? value.replace(/[^0-9]/g, "") : 0);

      return onChange(value);
    }

    if (noLeadingSpaces) {
      return onChange(value.replace(/^\s+/g, ""));
    }

    onChange(event.target.value);
  };

  const pad = paddingSize.toString() + "px";

  return (
    <div
      className={`react-custom-inputs-form-input-text ${
        !!errorText ? "invalid" : ""
      } ${value !== "" ? "active" : ""}`}
      style={{ width }}
    >
      <input
        type={type}
        value={
          type === "number" && separateThousands
            ? handleSeparateThousands(value)
            : value
        }
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          width,
          color: textColor,
          borderRadius,
          borderColor: errorText ? "#f44333" : borderColor,
          backgroundColor: bgColor,
          padding: label ? `20px ${pad} ${pad}` : pad,
          paddingRight: unitLabel ? `${`${unitLabel.length * 10}px`}` : pad,

          boxShadow: !shadowColor
            ? undefined
            : errorText
            ? "0px 0px 4px 0px #f44333"
            : `0px 0px 4px 0px ${textColor}`,
        }}
        id={id}
      />
      {unitLabel && (
        <div className="react-custom-inputs-unit-text">{unitLabel}</div>
      )}

      {label && <label>{label}</label>}

      {!!errorText && (
        <div className="react-custom-inputs-invalid-input-text">
          {errorText}
        </div>
      )}
    </div>
  );
};

export default CustomInput;

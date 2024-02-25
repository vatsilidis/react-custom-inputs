import React, { useCallback, useMemo } from "react";
import { InputType } from "./types";

interface InputProps<T> {
  value: T;
  // type: "string" | "number"; // Define the type prop
  type: InputType;
  handleChange: (value: T) => void;

  label?: string;
  width?: string;
  placeholder?: string;
  errorText?: string | null;
  textColor?: string;
  borderRadius?: string;
  noLeadingSpaces?: boolean;
  unitLabel?: string;
  borderColor?: string;
  id?: string;
  bgColor?: string;
  shadowColor?: string;
  paddingSize?: number;
}

const CustomInput = <T,>(props: InputProps<T>) => {
  const {
    value,
    handleChange,
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
    borderColor = "black",
    bgColor = "white",
    paddingSize = 10,
  } = props;

  const pad = useMemo(() => paddingSize.toString() + "px", [paddingSize]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: T;

      if (typeof value === "number") {
        newValue = event.target.value
          ? (parseInt(event.target.value) as unknown as T)
          : (0 as unknown as T);
      } else if (noLeadingSpaces) {
        newValue = event.target.value.replace(/^\s+/g, "") as unknown as T;
      } else {
        newValue = event.target.value as unknown as T;
      }

      handleChange(newValue);
    },
    [handleChange, noLeadingSpaces, value]
  );

  return (
    <div
      className={`react-custom-inputs-form-input-text ${
        !!errorText ? "invalid" : ""
      } ${value !== "" ? "active" : ""}`}
      style={{ width }}
    >
      <input
        type={type}
        value={value as unknown as string}
        onChange={handleInputChange}
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

import React from "react";
import styled, { css } from "styled-components";
import { usePostHogTracking } from "../../hooks/usePostHogTracking";

type BaseInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  helperText?: string;
  type?: "text" | "date" | "email";
  error?: string;
  required?: boolean;
  disabled?: boolean;
  trackingEnabled?: boolean;
  trackingProperties?: Record<string, any>;
};

type StringInputProps = BaseInputProps & {
  type?: "text" | "email";
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type DateInputProps = BaseInputProps & {
  type: "date";
  value?: Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputProps = StringInputProps | DateInputProps;

export const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  helperText,
  value,
  onChange,
  error,
  required,
  disabled = false,
  type = "text",
  trackingEnabled = false,
  trackingProperties,
}: InputProps) => {
  const { trackInputChange } = usePostHogTracking();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Track the input change if tracking is enabled
    if (trackingEnabled) {
      trackInputChange(name, type, {
        input_label: label,
        input_required: required,
        input_disabled: disabled,
        input_has_error: !!error,
        input_value_length: e.target.value.length,
        ...trackingProperties,
      });
    }

    // Call the original onChange handler
    onChange(e);
  };

  return (
    <StContainer>
      <StLabel htmlFor={name}>{required ? `${label} *` : label}</StLabel>
      <StInput
        id={name}
        name={name}
        placeholder={placeholder}
        value={value != null ? value.toString() : ""}
        onChange={handleChange}
        type={type}
        required={required}
        disabled={disabled}
        hasError={!!error}
      />
      {error ? (
        <StError>{error}</StError>
      ) : helperText ? (
        <StHelper>{helperText}</StHelper>
      ) : null}
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

// Core input styles with thicker bottom & right edges
const inputStyles = css<{ hasError: boolean; disabled?: boolean }>`
  width: 100%;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  /* Thicker border on bottom & right */
  border-style: solid;
  border-top-width: 1px;
  border-left-width: 1px;
  border-bottom-width: 4px;
  border-right-width: 4px;

  border-color: ${({ theme, hasError }) =>
    hasError ? theme.colors.red : theme.colors.dark};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.yellow : theme.colors.lightYellow};
  color: ${({ theme }) => theme.colors.dark};
  box-sizing: border-box;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark};
  }

  &:hover {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.red : theme.colors.dark};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
    /* Optional focus glow */
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.yellow};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StInput = styled.input<{ hasError: boolean; disabled?: boolean }>`
  ${inputStyles}
`;

const StLabel = styled.label`
  margin-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

const StError = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;

const StHelper = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
`;

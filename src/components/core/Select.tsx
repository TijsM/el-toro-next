import React from "react";
import styled, { css } from "styled-components";
import { usePostHogTracking } from "../../hooks/usePostHogTracking";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  name: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  trackingEnabled?: boolean;
  trackingProperties?: Record<string, any>;
};

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  helperText,
  value,
  onChange,
  error,
  required,
  disabled = false,
  options,
  trackingEnabled = false,
  trackingProperties,
}: SelectProps) => {
  const { trackInputChange } = usePostHogTracking();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (trackingEnabled) {
      trackInputChange(name, "select", {
        input_label: label,
        input_required: required,
        input_disabled: disabled,
        input_has_error: !!error,
        selected_value: e.target.value,
        ...trackingProperties,
      });
    }

    onChange(e);
  };

  return (
    <StContainer>
      <StLabel htmlFor={name}>{required ? `${label} *` : label}</StLabel>
      <StSelect
        id={name}
        name={name}
        value={value || ""}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        hasError={!!error}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StSelect>
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

const selectStyles = css<{ hasError: boolean; disabled?: boolean }>`
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

  &:hover {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.red : theme.colors.dark};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.yellow};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StSelect = styled.select<{ hasError: boolean; disabled?: boolean }>`
  ${selectStyles}
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
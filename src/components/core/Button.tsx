import styled, { DefaultTheme, useTheme } from "styled-components";

type ButtonSizes = "small" | "medium" | "large";

type ButtonProps = {
  onClick: () => void;
  text: string;
  size: ButtonSizes;
  inverted?: boolean;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  text,
  size,
  inverted,
  disabled,
}: ButtonProps) => {
  return (
    <StButton
      onClick={onClick}
      size={size}
      inverted={inverted}
      disabled={disabled}
    >
      {text}
    </StButton>
  );
};

const getButtonPadding = (size: ButtonSizes) => {
  if (size === "small") {
    return "2px 4px";
  } else if (size === "medium") {
    return "8px 16px";
  } else if (size === "large") {
    return "16px 24px";
  }
};

const getButtonFontSize = (size: ButtonSizes) => {
  if (size === "small") {
    return "0.6em";
  } else if (size === "medium") {
    return "0.7em";
  } else if (size === "large") {
    return "1.2em";
  }
};

const getButtonColor = (theme: DefaultTheme, inverted?: boolean) => {
  if (inverted) {
    return theme.colors.yellow;
  } else {
    return theme.colors.dark;
  }
};

const StButton = styled.button<{
  size: ButtonSizes;
  inverted?: boolean;
  disabled?: boolean;
}>`
  display: block;
  text-align: center;

  background-color: transparent;
  font-weight: bold;

  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme, inverted }) => getButtonColor(theme, inverted)};
  border: ${({ theme, inverted }) => getButtonColor(theme, inverted)} 2px solid;

  cursor: pointer;

  padding: ${({ size }) => getButtonPadding(size)};
  font-size: ${({ size }) => getButtonFontSize(size)};
`;

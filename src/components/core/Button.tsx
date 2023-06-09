import styled from "styled-components";

type ButtonSizes = "medium" | "large";

type ButtonProps = {
  onClick: () => void;
  text: string;
  size: ButtonSizes;
};

export const Button = ({ onClick, text, size }: ButtonProps) => {
  return (
    <StButton onClick={onClick} size={size}>
      {text}
    </StButton>
  );
};

const getButtonPadding = (size: ButtonSizes) => {
  if (size === "medium") {
    return "8px 16px";
  } else if (size === "large") {
    return "16px 24px";
  }
};

const getButtonFontSize = (size: ButtonSizes) => {
  if (size === "medium") {
    return "0.7em";
  } else if (size === "large") {
    return "1.2em";
  }
};

const StButton = styled.button<{ size: ButtonSizes }>`
  display: block;
  text-align: center;

  background-color: transparent;
  font-weight: bold;

  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.yellow};
  border: ${({ theme }) => theme.colors.yellow} 2px solid;

  cursor: pointer;

  padding: ${({ size }) => getButtonPadding(size)};
  font-size: ${({ size }) => getButtonFontSize(size)};
`;

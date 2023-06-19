import styled from "styled-components";

type BaseInputProps = {
  label: string;
  name: string;
  type?: "text" | "date" | "email";
  error?: string;
  required?: boolean;
};

type StringInputProps = BaseInputProps & {
  type: "text" | "email";
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type DateInputProps = BaseInputProps & {
  type: "date";
  value?: Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputProps = StringInputProps | DateInputProps;

export const Input = ({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = "text",
}: InputProps) => {
  return (
    <StContainer>
      <StLabel htmlFor={name}>{required ? label + " *" : label}</StLabel>
      <StInput
        name={name}
        value={value?.toString()}
        onChange={onChange}
        type={type}
        required={required}
      />
      <StError>{error}</StError>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const StInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 2px;
  box-sizing: border-box;
`;

const StLabel = styled.label`
  margin-bottom: 4px;
`;

const StError = styled.p``;

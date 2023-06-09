import styled from "styled-components";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const Input = ({ label, name, value, onChange, error }: InputProps) => {
  return (
    <StContainer>
      <StLabel htmlFor={name}>{label}</StLabel>
      <StInput name={name} value={value} onChange={onChange} />
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

import styled from "styled-components";
import { Li, Ul } from "./List";

type ErrorListProps = {
  errors: string[];
};

export const ErrorList = ({ errors }: ErrorListProps) => {
  return (
    <StErrors>
      <p>Vul alle velden juist in:</p>
      <StUl>
        {errors.map((error: string, index: number) => (
          <Li key={error} index={index}>
            {error}
          </Li>
        ))}
      </StUl>
    </StErrors>
  );
};
const StErrors = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

const StUl = styled(Ul)``;

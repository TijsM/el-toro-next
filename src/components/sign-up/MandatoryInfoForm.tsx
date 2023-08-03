import styled from "styled-components";
import { Input } from "../core";
import { useMemo, useState } from "react";
import { mandatoryInfoIsValid } from "../../schema/MandatoryInfo";
import { ErrorList } from "../core/ErrorList";

type MandatoryInfoFormProps = {
  email: string;
  setEmail: (email: string) => void;
};

export const MandatoryInfoForm = ({
  email,
  setEmail,
}: MandatoryInfoFormProps) => {
  const [lostFocusOnForm, setLostFocusOnForm] = useState(false);

  const errors = useMemo(() => {
    return mandatoryInfoIsValid({ email });
  }, [email]);

  return (
    <StGeneralInfoContainer
      onBlur={() => {
        setLostFocusOnForm(true);
      }}
    >
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label={"Email"}
        name="email"
        type="email"
        required
      />

      {lostFocusOnForm && !errors.valid && <ErrorList errors={errors.errors} />}
    </StGeneralInfoContainer>
  );
};
const StGeneralInfoContainer = styled.div`
  padding-bottom: 48px;
`;

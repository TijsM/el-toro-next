"use client";
import styled from "styled-components";
import Image from "next/image";
import { H2 } from "../styled-components/Types";

export const Parcours = () => {
  return (
    <StSection>
      <H2 id="parcoursHead" className="textYellow">
        Parcours
      </H2>
      <StImageContainer>
        <Image
          id="plannetje"
          src="/parcours.jpg"
          alt="parcours race"
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
        />
      </StImageContainer>
    </StSection>
  );
};

const StSection = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const StImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

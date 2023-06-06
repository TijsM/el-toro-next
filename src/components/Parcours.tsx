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
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "contain" }} //
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
  height: 100vh;
  width: 100%;
`;

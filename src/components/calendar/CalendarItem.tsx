"use client";

import styled from "styled-components";

type CalendarItemProps = {
  time: string;
  title: string;
  description?: string;
};

export const CalendarItem = ({
  time,
  description,
  title,
}: CalendarItemProps) => {
  return (
    <StContainer>
      <span>{time}</span>
      <div>
        <div>{title}</div>
        {description && <StDistance>{description}</StDistance>}
      </div>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  margin-bottom: 16px;
`;

const StDistance = styled.div`
  margin-top: 4px;
  font-style: italic;
`;

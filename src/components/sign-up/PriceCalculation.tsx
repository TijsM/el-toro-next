import { useMemo } from "react";
import dayjs from "dayjs";
import {
  CATEGORIES,
  CategoryNames,
  Category,
} from "../../constants/categories";
import { H3 } from "../../styled-components/Types";
import styled from "styled-components";
import { Particpant } from "../../types/Participant";

type PriceCalculationProps = {
  participants: Particpant[];
};

export const PriceCalculation = ({ participants }: PriceCalculationProps) => {
  const pricing = useMemo(() => {
    const selectedCategories = participants.map((participant) => {
      const age = dayjs().diff(participant.dateOfBirth, "years");

      const category = Object.values(CATEGORIES).find((categoryInfo) => {
        return age >= categoryInfo.minAge && age <= categoryInfo.maxAge;
      });

      return category;
    });

    const adultsAmount = selectedCategories.filter(
      (cat) => !cat?.isChild
    ).length;
    const adultPrice = CATEGORIES.adult.price;

    const childrenAmount = selectedCategories.filter(
      (cat) => cat?.isChild
    ).length;
    const childPrice = CATEGORIES.child1.price;

    return {
      adults: {
        amount: adultsAmount,
        pricePP: CATEGORIES.adult.price,
        priceTotal: adultsAmount * adultPrice,
      },
      children: {
        amount: childrenAmount,
        pricePP: CATEGORIES.child1.price,
        priceTotal: childrenAmount * childPrice,
      },
    };
  }, [participants]);

  return (
    <StContainer>
      <StH3>Totaal</StH3>
      {!!pricing.adults.amount && (
        <StPriceRow>
          <StPriceDescription>Volwassenen</StPriceDescription>
          <StPriceDetailContainer>
            <StAmount>{pricing.adults.amount}x</StAmount>
            <StPrice>&#8364;{pricing.adults.pricePP}</StPrice>
          </StPriceDetailContainer>
        </StPriceRow>
      )}
      {!!pricing.children.amount && (
        <StPriceRow>
          <StPriceDescription>Children</StPriceDescription>
          <StPriceDetailContainer>
            <StAmount>{pricing.children.amount}x</StAmount>
            <StPrice>&#8364;{pricing.children.pricePP}</StPrice>
          </StPriceDetailContainer>
        </StPriceRow>
      )}
      <StLine />
      <StPriceRow>
        <StPriceDescription>Kinderen</StPriceDescription>
        <StPriceDetailContainer>
          <StPrice>
            &#8364;{pricing.children.priceTotal + pricing.adults.priceTotal}
          </StPrice>
        </StPriceDetailContainer>
      </StPriceRow>
    </StContainer>
  );
};

const StContainer = styled.div`
  margin-top: 72px;
`;

const StH3 = styled(H3)`
  margin-bottom: 24px;
`;

const StPriceRow = styled.div`
  display: flex;
  margin: 16px 0px;
`;

const StPriceDescription = styled.div`
  display: flex;
  flex-grow: 1;
`;
const StPriceDetailContainer = styled.div``;

const StAmount = styled.span`
  margin-right: 16px;
`;
const StPrice = styled.span``;

const StLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;

import styled from "styled-components";
import { H3 } from "../../styled-components/Types";
import { CATEGORIES, DEPOSIT_PRICE } from "../../constants/categories";

export const Pricing = () => {
  return (
    <StArticle>
      <StPricingTitle>Prijslijst:</StPricingTitle>
      <StPriceRow>
        <StPriceText>Volwassenen</StPriceText>
        <StPriceText>&#8364;{CATEGORIES.adult.price}</StPriceText>
      </StPriceRow>
      <StPriceRow>
        <StPriceText>Kinderen</StPriceText>
        <StPriceText>&#8364;{CATEGORIES.child1.price}</StPriceText>
      </StPriceRow>
      <StPriceRow>
        <StPriceText>Waarborg, te betalen ter plaatse</StPriceText>
        <StPriceText>(&#8364;{DEPOSIT_PRICE})</StPriceText>
      </StPriceRow>
    </StArticle>
  );
};

const StArticle = styled.article`
  min-width: 50%;
`;

const StPricingTitle = styled(H3)`
  color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 24px;
`;

const StPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const StPriceText = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  padding-right: 48px;
`;

"use client";

import styled from "styled-components";
import { H2, H3 } from "../styled-components/Types";

export const Rules = () => {
  return (
    <StSection id="praktisch">
      <H2>Praktisch</H2>
      <StContent className="praktischContent">
        <StContentBlock>
          <H3 className="textYellow">Bereikbaarheid en parking</H3>
          <StContentBlockContent>
            Er zijn parkeermogelijkheden op het parkeerterrein van Hubo en van
            KSC Dikkelvenne. Bekijk zeker ons plannetje op deze website.
          </StContentBlockContent>
        </StContentBlock>
        <StContentBlock>
          <H3 className="textYellow">Kinderkoers</H3>
          <StContentBlockContent>
            Ook de kinderen worden niet vergeten op de Groote Prijs El Toro. De
            kinder-’koers’ zal hun deel zijn. Ookal zijn hun fietsjes nog niet
            noodzakelijk van pedalen voorzien, in deze rit zullen ze zich ware
            Flandriens wanen. Elk kind kan vrij kiezen met welke fiets hij/zij
            aan de start verschijnt, zolang hij maar veilig en niet
            gemotoriseerd is. Elk kind mag begeleid worden door één volwassene.
            Voor elke deelnemer is er een aandenken. Inschrijven doe je via deze
            website of ter plaatse vanaf 13u.
          </StContentBlockContent>
        </StContentBlock>
        <StContentBlock>
          <H3 className="textYellow">Reglement</H3>
          <StContentBlockContent>
            <StOl>
              <StLi>
                Uw vehikel beschikt over:
                <StUl>
                  <StLiCompact>Versnellingen aan de buis</StLiCompact>
                  <StLiCompact>Pedalen met haken, géén klikpedalen</StLiCompact>
                  <StLiCompact>Goed functionerende remmen</StLiCompact>
                </StUl>
              </StLi>

              <StLi>
                Renners van het mannelijke type zijn voorzien van haar op de
                benen.
              </StLi>
              <StLi>
                Renners van het vrouwelijke type zijn vrijgesteld van regel 2.
              </StLi>
              <StLi>
                We verwachten iedereen op tijd voor aanmelding en inschrijving
                (13u).
              </StLi>
              <StLi>Valhelm verplicht.</StLi>
              <StLi>
                Renners die roekeloos en/of onsportief gedrag vertonen worden
                uit koers genomen. Toon respect voor elke deelnemer.
              </StLi>
              <StLi>Geen bier voor of tijdens de wedstrijd.</StLi>
              <StLi>
                Koersgeschillen dienen aan de koerscommissaris voorgelegd te
                worden.
              </StLi>
            </StOl>
          </StContentBlockContent>
        </StContentBlock>
      </StContent>
    </StSection>
  );
};

const StSection = styled.section`
  color: #fff4da;
`;

const StContent = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const StContentBlock = styled.article`
  display: grid;
  grid-template-columns: 25% 75%;
  margin: 30px;
`;

const StContentBlockContent = styled.div`
  padding-left: 30px;
  border-left: #065755 2px solid;
  padding: 10px 50px;
`;

const StOl = styled.ol`
  margin-left: 15px;
`;

const StLi = styled.li`
  margin-bottom: 20px;
`;

const StLiCompact = styled(StLi)`
  margin-bottom: 5px;
`;

const StUl = styled.ul`
  margin-left: 15px;
`;

import React from "react";
import Image from "next/image";
import {
  ImageContainer,
  ZoomedImageWrapper,
  ZoomedStyledImage,
} from "./ParcoursStyles";

type ParcoursImageProps = {
  xPercent: number;
  yPercent: number;
  scale: number;
};

const ParcoursImage: React.FC<ParcoursImageProps> = ({
  xPercent,
  yPercent,
  scale,
}) => (
  <ImageContainer>
    <ZoomedImageWrapper x={xPercent} y={yPercent} s={scale}>
      <ZoomedStyledImage
        src="/parcours.jpg"
        alt="parcours race"
        width={0}
        height={0}
        sizes="100vw"
      />
    </ZoomedImageWrapper>
  </ImageContainer>
);

export default ParcoursImage;

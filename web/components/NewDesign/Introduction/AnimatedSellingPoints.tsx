import styled from "@emotion/styled";
import { css } from "@emotion/react";

const animationDuration = (props: { duration: number }) => css`
  animation-duration: ${props.duration}s;
`;

const rotateAnimationWithDelay = (props: { delay: number }) => css`
  animation-delay: ${props.delay}s;
`;

const SellingPointText = styled.span`
  position: absolute;
  left: 0;
  color: #ff934f;
  animation-fill-mode: forwards;
  display: inline-block;
  animation-name: rotate-out-only;
  ${animationDuration}

  @keyframes rotate-out-only {
    0%,
    80% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
`;

const LongestTextPlaceholder = styled(SellingPointText)`
  position: initial;
  visibility: hidden;
  animation: none;
`;

const AnimatedSellingPoint = styled(SellingPointText)`
  display: inline-block;
  position: absolute;
  opacity: 0;
  left: 0;
  animation-name: rotate;
  ${animationDuration}
  ${rotateAnimationWithDelay}

  @keyframes rotate {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }

    10%,
    80% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
`;

const LastElement = styled(AnimatedSellingPoint)`
  animation-name: rotate-last;
  ${rotateAnimationWithDelay}
  @keyframes rotate-last {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }

    10%,
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const sellingPoints = [
  "sol på verandaen",
  "lyden av bølgesus",
  "gamleby i gangavstand",
  "ferske bakevarer rett ved",
];

export default function AnimatedSellingPoints() {
  const animationDuration = 8;
  const [head, ...tail] = sellingPoints;
  const longestText = [...sellingPoints].sort((a, b) => b.length - a.length)[0];
  return (
    <>
      <LongestTextPlaceholder duration={0}>
        {longestText}
      </LongestTextPlaceholder>
      <SellingPointText duration={animationDuration}>{head}</SellingPointText>
      {tail.map((text, index) => (
        <AnimatedSellingPoint
          key={text}
          duration={animationDuration}
          delay={animationDuration * (index + 1)}
        >
          {text}
        </AnimatedSellingPoint>
      ))}
      <LastElement
        duration={animationDuration}
        delay={animationDuration * sellingPoints.length}
      >
        {head}
      </LastElement>
    </>
  );
}

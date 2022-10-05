import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { orangeTimerState } from "./state";

type BgBorderColor = { bgColor?: string; borderColor?: string };

const GreenCircle = styled.div<BgBorderColor>`
  border: 0.5rem solid ${(props: BgBorderColor) => props.borderColor || "red"};
  background-color: ${(props: BgBorderColor) => props.bgColor || "lightgreen"};
  border-radius: 1rem;
  padding-top: 1rem;
  height: 2rem;
  width: 3rem;
  font-size: 0.75rem;
`;

export function ReadOnlyTimer({
  bgColor = "white",
  borderColor = "green"
}: BgBorderColor) {
  const timeLeft = useRecoilValue(orangeTimerState);
  return (
    <GreenCircle bgColor={bgColor} borderColor={borderColor}>
      {timeLeft}
    </GreenCircle>
  );
}

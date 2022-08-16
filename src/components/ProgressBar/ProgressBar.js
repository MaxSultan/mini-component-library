/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const height = {
  small: 8,
  medium: 12,
  large: 24,
};

const ProgressBarContainer = styled.div`
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  height: ${({ size }) => `${height[size]}px;`};
  overflow: hidden;
`;

const ProgressIndicatorBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${({ value }) => `${value}%`};
  height: 100%;
`;

const OuterWrapper = styled.div`
  padding: 4px;
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: fit-content;

  ${ProgressBarContainer} {
    box-shadow: none;
    background-color: transparent;
    border-radius: 4px 4px 4px 4px;
  }
`;

const ProgressBar = ({ value, size }) => {
  return size === "large" ? (
    <OuterWrapper>
      <ProgressBarContainer size={size}>
        <ProgressIndicatorBar value={value} size={size}></ProgressIndicatorBar>
      </ProgressBarContainer>
    </OuterWrapper>
  ) : (
    <ProgressBarContainer size={size}>
      <ProgressIndicatorBar value={value} size={size}></ProgressIndicatorBar>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

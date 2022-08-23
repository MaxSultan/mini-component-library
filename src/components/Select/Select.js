import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const StyledSelect = styled.select`
  width: min-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 8px;
  border-radius: 4px;
  border: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 32px;
  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: solid 1px ${COLORS.primary};
    outline-offset: -1px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: relative;
  top: -25px;
  left: 120px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <IconWrapper>
        <Icon id="chevron-down" size={16} />
      </IconWrapper>
    </>
  );
};

export default Select;

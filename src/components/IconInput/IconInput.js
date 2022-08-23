import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const StyledInputWrapper = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 30fr;
    grid-template-rows: 100%;
    border-bottom: 1px solid ${COLORS.black};

    &:focus {
      outline: 2px solid blue;
    }
  `;

  const StyledLabel = styled.label`
    width: ${({ width }) => width};
  `;

  const StyleResetInput = styled.input`
    border: none;
    outline: none;
  `;

  const triggerParentFocus = (e) => {
    e.preventDefault();
    e.target.parentElement.style = "outline: 2px solid blue";
  };

  const handleBlur = (e) => {
    e.target.parentElement.style = "outline: none";
  };

  return (
    <StyledLabel>
      {label}
      <StyledInputWrapper tabIndex="0" onBlur={(e) => handleBlur(e)}>
        <Icon id={icon} size={size === "small" ? 16 : 32}></Icon>
        <StyleResetInput
          placeholder={placeholder}
          tabIndex="-1"
          onFocus={(e) => triggerParentFocus(e)}
        ></StyleResetInput>
      </StyledInputWrapper>
    </StyledLabel>
  );
};

export default IconInput;

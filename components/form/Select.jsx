import React, { useMemo, useCallback } from "react";
import styled from "styled-components";

import { handleInputChange } from "../../utils/helpers";
import { Label } from "../module";

const StyledSelect = styled.select`
  background: transparent;
  border: none;
  padding: 12px 16px;
  outline: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  margin-bottom: 2rem;
  min-width: 10rem;
  color: ${(props) => props.theme.colors.display};
`;

const Select = ({ value, onChange, name, options, label, modifier }) => {
  const memoedOnChange = useCallback(
    (event) => handleInputChange(event.target.value, name, onChange, modifier),
    [name, onChange, modifier]
  );

  const memoedOptions = useMemo(
    () =>
      options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      )),
    [options]
  );

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect id={name} value={value} onChange={memoedOnChange}>
        {memoedOptions}
      </StyledSelect>
    </>
  );
};

export default Select;

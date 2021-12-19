import React, { useCallback } from "react";

import { handleInputChange } from "../../utils/helpers";
import { Label } from "../module";

const Checkbox = ({ value, onChange, name, label }) => {
  const memoedOnChange = useCallback(
    (event) => handleInputChange(event.target.checked, name, onChange),
    [name, onChange]
  );
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        type="checkbox"
        checked={value}
        onChange={memoedOnChange}
      />
    </>
  );
};

export default Checkbox;

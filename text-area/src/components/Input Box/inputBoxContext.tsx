import React from "react";

export const InputBoxContext = React.createContext<any>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: "",
  required: true,
  rule: "",
  value: "",
  onChange: undefined,
});
InputBoxContext.displayName = "InputBoxContext";


import React from "react";

export const RigoTextAreaContext = React.createContext<any>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: "",
  required: true,
  rule: "",
  value: "",
  onChange: undefined,
});
RigoTextAreaContext.displayName = "RigoTextAreaContext";


import React from "react";
import { InputNumberProps } from "./interface";

export const RigoInputNumberContext = React.createContext<InputNumberProps>({
  label: "Sample label",
  name: "",
  control: undefined,
  errors: undefined,
  required: false,
  rule: undefined,
  value: "",
  onChange: undefined,
});
RigoInputNumberContext.displayName = "RigoInputNumberContext";

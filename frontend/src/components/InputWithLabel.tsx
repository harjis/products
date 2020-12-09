import React from "react";

import { Input, Props as InputProps } from "./Input";

type Props = InputProps & { label: string };
export const InputWithLabel: React.FC<Props> = (props) => {
  return (
    <div>
      {props.label}: <Input onChange={props.onChange} value={props.value} />
    </div>
  );
};

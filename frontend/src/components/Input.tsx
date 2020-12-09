import React, { ChangeEventHandler } from "react";

export type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: HTMLInputElement["value"];
};
export const Input: React.FC<Props> = (props) => {
  return <input type="text" onChange={props.onChange} value={props.value} />;
};

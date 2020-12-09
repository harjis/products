import React from "react";

type Props = {
  onClick: () => void;
  title: string;
};
export const Button: React.FC<Props> = (props) => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

import React from "react";

type Props<Item> = {
  items: Item[];
  labelKey: keyof Item;
};
export const List = <Item extends { id: number }>(
  props: React.PropsWithChildren<Props<Item>>
) => (
  <ul>
    {props.items.map((item) => (
      <li key={item.id}>{item[props.labelKey]}</li>
    ))}
  </ul>
);

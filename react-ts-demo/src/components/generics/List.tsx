import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item as T)}>
            {item as ReactNode}
          </div>
        );
      })}
    </>
  );
};

import React from "react";

export interface IItemCard {
  name: string;
}

function ItemCard({ name }: IItemCard) {
  return <div>{name}</div>;
}

export default ItemCard;

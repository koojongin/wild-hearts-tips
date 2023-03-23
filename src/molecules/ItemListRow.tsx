import React from 'react';
import { KIND_OF_POWERS } from '../assets/ItemSkills';

export interface IItemListRow {
  item: any;

  index: number;
}

function ItemListRow({ item, index }: IItemListRow) {
  const { name, powers, moreCriticalChance, crafting, skills } = item;
  const isOddIndex = index % 2;
  const bgColorClass = isOddIndex ? 'bg-gray-50' : 'white';
  return (
    <div className={`${bgColorClass} px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6`}>
      <dt className="text-sm font-medium text-gray-500">{name}</dt>
      {KIND_OF_POWERS.map(powerType => {
        const power = powers[powerType] || 0;
        return <dd className="mt-1 text-sm text-gray-900 sm:mt-0">{power}</dd>;
      })}
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0">+{moreCriticalChance}%</dd>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
        {crafting?.materials?.map((material: any) => {
          const { amount, name: materialName } = material;
          return (
            <div>
              <div>
                {materialName}
                <span>{amount}</span>
              </div>
            </div>
          );
        })}
      </dd>
    </div>
  );
}

export default ItemListRow;

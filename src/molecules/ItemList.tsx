import React from 'react';
import ItemListRow from './ItemListRow';
import { WEAPONS } from '../assets/Weapons';
import { KIND_OF_POWERS } from '../assets/ItemSkills';

function ItemList() {
  const items = WEAPONS;
  return (
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-500 text-white px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium">아이템명</dt>
          {KIND_OF_POWERS.map(powerType => (
            <dd className="mt-1 text-sm sm:mt-0">{powerType}</dd>
          ))}
          <dd className="mt-1 text-sm sm:mt-0">치명타</dd>
          <dd className="mt-1 text-sm sm:mt-0">제작</dd>
        </div>
      </dl>
      <dl>
        {items.map((item, index) => (
          <ItemListRow item={item} index={index} />
        ))}
      </dl>
    </div>
  );
}

export default ItemList;

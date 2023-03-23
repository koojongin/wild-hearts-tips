import React from 'react';
import ItemList from '../molecules/ItemList';

function ItemListPage() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Wild Hearts Item Tables</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Weapon</p>
      </div>
      <ItemList />
    </div>
  );
}

export default ItemListPage;

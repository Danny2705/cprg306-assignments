"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main className='bg-slate-950 mx-2'>
      <div className='max-w-md w-full'>
        <h1 className='text-3xl font-bold m-2 py-2'>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList props={items} />
      </div>
    </main>
  );
}

"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdea from "./meal-idea";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedItemName);
  };
  return (
    <main className='bg-slate-950 mx-2'>
      <h1 className='text-3xl font-bold m-2 py-2'>Shopping List</h1>
      <div className='flex'>
        <div className='flex-1 max-w-sm m-2'>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className='flex-1 mx-4 max-w-sm my-2 w-full items-start'>
          <h1 className='text-xl font-bold'>Meal Ideas</h1>
          {/* <h1 className='text-xl font-bold'>Meal Ideas</h1>
          <div>Select an item to see meal ideas</div> */}
          {selectedItemName ? (
            <MealIdea ingredient={selectedItemName} />
          ) : (
            <div>
              <div>Select an item to see meal ideas </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = (() => {
    if (sortBy === "name") {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return items.sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  })();

  const handleClick = (sortType) => {
    setSortBy(sortType);

    if (sortType === "groupedCategory") {
      handleGroupedCategory();
    }
  };

  return (
    <main>
      <div className='flex items-start px-2'>
        <p className='my-3 mr-[0.3rem]'>Sort by:</p>
        <button
          className={`${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
          onClick={() => handleClick("name")}
        >
          Name
        </button>
        <button
          className={`${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
          onClick={() => handleClick("category")}
        >
          Category
        </button>
      </div>

      <div className='ml-2 max-w-[25rem] w-full'>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </div>
    </main>
  );
}

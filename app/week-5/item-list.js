"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupedItems, setGroupedItems] = useState(null);

  const handleGroupedCategory = () => {
    const groupedItemsData = itemsData.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
    const sortedCategories = Object.keys(groupedItemsData).sort();

    const sortedGroupedItems = sortedCategories.reduce((acc, category) => {
      acc[category] = groupedItemsData[category].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return acc;
    }, {});

    setGroupedItems(sortedGroupedItems);
  };

  const sortedItems = (() => {
    if (sortBy === "name") {
      return itemsData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return itemsData.sort((a, b) => a.category.localeCompare(b.category));
    }
    return itemsData;
  })();

  const handleClick = (sortType) => {
    setSortBy(sortType);

    if (sortType === "groupedCategory") {
      handleGroupedCategory();
    }
  };

  return (
    <main>
      <div className='flex items-start'>
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
        <button
          className={`${
            sortBy === "groupedCategory" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
          onClick={() => handleClick("groupedCategory")}
        >
          Grouped Category
        </button>
      </div>

      <div>
        {sortBy !== "groupedCategory"
          ? sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))
          : groupedItems &&
            Object.keys(groupedItems).map((category) => (
              <div key={category}>
                <h2 className='text-xl capitalize mb-2'>{category}</h2>
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </div>
            ))}
      </div>
    </main>
  );
}

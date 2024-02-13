"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-idea";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context.js";
import {
  getItems,
  addItem,
  deleteItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };
  useEffect(() => {
    loadItems();
  }, [user]);

  const handleDeleteItem = async (itemId) => {
    if (user) {
      await deleteItem(user.uid, itemId);
      setSelectedItemName("");
      loadItems();

      // setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
  };

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedItemName);
  };

  return (
    <div>
      {!user ? (
        <div>Your need to be signed in to view this page.</div>
      ) : (
        <main className='bg-slate-950 mx-2'>
          <h1 className='text-3xl font-bold m-2 py-2'>Shopping List</h1>
          <div className='flex'>
            <div className='flex-1 max-w-sm m-2'>
              <NewItem onAddItem={handleAddItem} />
              <ItemList
                items={items}
                onItemSelect={handleItemSelect}
                deleteItem={handleDeleteItem}
              />
            </div>
            <div className='flex-1 mx-4 max-w-sm my-2 w-full items-start'>
              <h1 className='text-xl font-bold'>Meal Ideas</h1>
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
      )}
    </div>
  );
}

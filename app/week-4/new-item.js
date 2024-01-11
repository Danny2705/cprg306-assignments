"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    console.log(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className='flex justify-center w-full'>
      <form
        onSubmit={handleSubmit}
        className='bg-slate-900 p-2 m-4 text-black max-w-sm w-full'
      >
        <div>
          <input
            placeholder='Item name'
            required
            type='text'
            value={name}
            onChange={handleNameChange}
            className='w-full p-2 border-2 rounded-lg mt-1 font-sans'
          />
        </div>

        <div className='flex justify-between items-center mt-2'>
          <input
            min={1}
            max={99}
            required
            type='number'
            value={quantity}
            onChange={handleQuantityChange}
            className='p-2 rounded-lg ml-1 border-2 w-20 font-sans'
          />
          <select
            value={category}
            onChange={handleCategoryChange}
            className='p-2 rounded-lg ml-1 border-2 font-sans'
          >
            <option value={true} disabled>
              Category
            </option>
            <option value='produce'>Produce</option>
            <option value='diary'>Diary</option>
            <option value='bakery'>Bakery</option>
            <option value='meat'>Meat</option>
            <option value='frozen foods'>Frozen Foods</option>
            <option value='canned goods'>Canned Goods</option>
            <option value='dry goods'>Dry Goods</option>
            <option value='beverages'>Beverages</option>
            <option value='snacks'>Snacks</option>
            <option value='household'>Household</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 py-2 px-4 text-white hover:bg-blue-700 mt-4 rounded-lg font-semibold'
        >
          +
        </button>
      </form>
    </div>
  );
}

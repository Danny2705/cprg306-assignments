export default function Item({
  name,
  quantity,
  category,
  onSelect,
  deleteItem,
}) {
  return (
    <div className='flex items-center justify-between'>
      <ul
        className='bg-slate-900 mx-4 my-2 p-2 max-w-sm w-full hover:bg-orange-800 cursor-pointer flex justify-between items-center'
        onClick={onSelect}
      >
        <div>
          <li className='font-bold text-xl'>{name}</li>
          <li className='text-sm'>
            Buy {quantity} in {category}
          </li>
        </div>
      </ul>

      <div
        className='rounded-xl bg-white flex items-center text-black px-3 hover:bg-blue-500 transition-all duration-75 cursor-pointer'
        onClick={deleteItem}
      >
        X
      </div>
    </div>
  );
}

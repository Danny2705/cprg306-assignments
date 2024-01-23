export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul
      className='bg-slate-900 m-4 p-2 max-w-sm hover:bg-orange-800 cursor-pointer'
      onClick={onSelect}
    >
      <li className='font-bold text-xl'>{name}</li>
      <li className='text-sm'>
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}

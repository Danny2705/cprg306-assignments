export default function Item({ name, quantity, category }) {
  return (
    <main>
      <ul className='bg-slate-900 mb-4 p-2 max-w-sm'>
        <li className='font-bold text-xl'>{name}</li>
        <li className='text-sm'>
          Buy {quantity} in {category}
        </li>
      </ul>
    </main>
  );
}

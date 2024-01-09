import ItemList from "./item-list";

export default function Page() {
  return (
    <main className='p-2 bg-slate-950'>
      <h1 className='text-3xl font-bold mb-4'>Shopping List</h1>
      <div className='px-2'>
        <ItemList />
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className='flex justify-center flex-col px-[16rem] py-[6rem]'>
        <h1 className='text-4xl font-bold'>
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <Link
          href='/week-2'
          className='text-lg mt-[1.25rem] hover:underline hover:text-green-400'
        >
          Week 2 Assignment
        </Link>
      </div>
    </main>
  );
}

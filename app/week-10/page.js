"use client";
import Link from "next/link.js";
import { useUserAuth } from "./_utils/auth-context.js";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };
  return (
    <div>
      <h1 className='text-4xl font-bold mb-5'>Shopping List App</h1>
      {!user ? (
        <div>
          <button onClick={handleLogin} className='text-lg'>
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div className='flex flex-col text-lg'>
          <p>
            Signed in as {user?.displayName} ({user?.email}).
          </p>
          <p onClick={handleLogout} className='hover:underline cursor-pointer'>
            Sign out
          </p>
          <Link href='/week-10/shopping-list' className='hover:underline'>
            Continue to your Shopping List
          </Link>
        </div>
      )}
    </div>
  );
}

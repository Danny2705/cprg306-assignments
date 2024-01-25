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
      <button onClick={handleLogin}>Sign in with GitHub</button>
      <button onClick={handleLogout}>Sign out</button>
      <button>Continue to your Shopping List</button>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>
    </div>
  );
}

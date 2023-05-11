"use client";

import { useSession, signIn, signOut } from "next-auth/react";

function Login() {

  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()} className="link">
          <p>{session.user.name} </p>
          <p className="font-extrabold md:text-sm">Account & Lists </p>
        </button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()} className="link">
        Sign in
      <p className="font-extrabold md:text-sm">Account & Lists </p>
      </button>
    </>
  );
}

export default Login;

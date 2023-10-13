"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../../hooks/useAuth";

export default function NavBar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl py-1">
        OpenTable
      </Link>
      <div>
        {/* loading state for signin/out buttons */}
        {/* {loading ? (
          <div className="flex">
            {data ? (
              <>
                <p className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                  Sign in
                </p>
                <p className="border p-1 px-4 rounded mr-3">Sign up</p>
              </>
            ) : (
              <p className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Sign out
              </p>
            )}
          </div>
        ) : null} */}
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
                onClick={signout}
              >
                Sign out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

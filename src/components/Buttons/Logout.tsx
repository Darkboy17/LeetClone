import { auth } from "@/firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";

const Logout: React.FC = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const router = useRouter();

  const handleLogOut = () => {
    signOut();
    router.push("/auth");
  };

  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
      onClick={handleLogOut}
    >
      <FiLogOut />
    </button>
  );
};
export default Logout;

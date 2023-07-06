import react from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/nav";

export default function Home() {
  const { data: session } = useSession();
  if (!session){
    return (
      <div className="bg-white w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button onClick={() => signIn("google")} className="bg-[#FAAF5A] text-black p-2 px-4 rounded-lg">Login with Google</button>
      </div>
      </div>)
  }

  return (
    <div className="bg-black-900 min-h-screen flex">
    <Nav/>
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2 text-black">logged in {session.user.email}</div>
    </div>
   
  );
}

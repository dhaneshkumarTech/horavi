import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="p-5 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center mx-5">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/futurePathLogo.png"
              width={40}
              height={40}
              alt="futurePath Logo"
              className="cursor-pointer"
            />
          </Link>
          <Link href="/">
          <h1 className="text-2xl font-bold text-gray-700">Horavi</h1>
          </Link>
          
        </div>

        <nav className="flex-grow flex justify-center">
          <div className="flex space-x-6 text-lg font-medium text-gray-600">
            <Link href="/college" className="hover:text-gray-800 transition">College</Link>
            <Link href="/university" className="hover:text-gray-800 transition">University</Link>
            <Link href="/mocktest" className="hover:text-gray-800 transition">Mock Test</Link>
            <Link href="/horavigeneral" className="hover:text-gray-800 transition">Horavi's General</Link>
            <Link href="/pricing" className="hover:text-gray-800 transition">Pricing</Link>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="mr-2">
            <Link href="/login" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/register" className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition">
              Register
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

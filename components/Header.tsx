import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="p-3 px-10 shadow-lg">
      <div className="flex justify-between items-center mx-5">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/horavilogo.png"
              width={80}
              height={30}
              alt="horavi Logo"
              className="cursor-pointer transform transition-transform duration-500 hover:scale-110"
            />
          </Link>
        </div>

        <nav className="flex-grow flex justify-center">
          <div className="flex space-x-8 text-lg font-semibold">
            <Link href="/college" className="hover:text-blue-700 transition duration-500">College</Link>
            <Link href="/university" className="hover:text-blue-700 transition duration-500">University</Link>
            <Link href="/mocktest" className="hover:text-blue-700 transition duration-500">Mock Test</Link>
            <Link href="/horavigeneral" className="hover:text-blue-700 transition duration-500">Horavi's General</Link>
            <Link href="/blog" className="hover:text-blue-700 transition duration-500">Blog</Link>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="mr-2 bg-blue">
            <Link href="/login" className="px-2 py-2 w-24  text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-800  transition duration-500">
              Login
            </Link>
          </Button>
          <Button asChild className="bg-green">
             <Link href="/register" className="px-4 py-2 text-white bg-green-600 rounded-full shadow-md hover:bg-green-800 transition duration-500">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;  
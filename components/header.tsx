import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {

  return (
    <header className="border-b border-[#e0e4ea] bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-[#1373e6]"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-xl font-semibold text-[#151b26]">eMed</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-[#6e7781] hover:text-[#151b26]">
            Despre
          </Link>
          <Link href="/services" className="text-[#6e7781] hover:text-[#151b26]">
            Servicii
          </Link>
          <Link href="/contact" className="text-[#6e7781] hover:text-[#151b26]">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <Link href="/auth/mpass">
            <Button className="bg-[#1373e6] hover:bg-[#0058d2]">Login with MPass</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

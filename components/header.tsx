"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [unreadMessages, setUnreadMessages] = useState(3)

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5 text-[#6e7781]" />
                {unreadMessages > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#d02746]">
                    {unreadMessages}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="font-medium">Dr. Maria Ionescu (2)</DropdownMenuItem>
              <DropdownMenuItem className="font-medium">Dr. Mihai Popa (1)</DropdownMenuItem>
              <DropdownMenuItem className="text-[#1373e6]">Vezi toate mesajele</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/dashboard">
            <Button className="bg-[#1373e6] hover:bg-[#0058d2]">Cabinet Personal</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

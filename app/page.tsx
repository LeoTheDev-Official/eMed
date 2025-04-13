"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, MessageSquare } from "lucide-react"

export default function Home() {
  const [userType, setUserType] = useState<"patient" | "doctor" | null>(null)
  if (!userType) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="max-w-md w-full px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#151b26] mb-2">Bine ați venit la eMed</h1>
            <p className="text-[#6e7781]">Vă rugăm să selectați tipul de utilizator pentru a continua</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => {setUserType("patient"); window.location.href='/login/patient';}}
              className="h-32 flex flex-col items-center justify-center space-y-2 bg-[#1373e6] hover:bg-[#0058d2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Pacient</span>
            </Button>
            <Button
              onClick={() => {setUserType("doctor"); window.location.href='/login/doctor';}}
              className="h-32 flex flex-col items-center justify-center space-y-2 bg-[#1373e6] hover:bg-[#0058d2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                <path d="M13 13h4"></path>
                <path d="M13 17h4"></path>
                <path d="M9 13h.01"></path>
                <path d="M9 17h.01"></path>
              </svg>
              <span>Medic</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

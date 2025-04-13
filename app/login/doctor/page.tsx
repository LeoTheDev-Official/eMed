"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, FileDigit, Shield } from "lucide-react"
import Link from "next/link"

export default function DoctorLoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleMoldSignLogin = () => {
    setIsLoading(true)

    // Simulate MoldSign authentication
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full">
        <Link href="/" className="inline-flex items-center text-[#6e7781] hover:text-[#151b26] mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Înapoi la pagina principală
        </Link>

        <Card className="shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#151b26]">Autentificare Medic</CardTitle>
            <CardDescription className="text-[#6e7781]">
              Autentificați-vă folosind semnătura electronică MoldSign
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-[#f6fafe] border border-[#bddbfd] rounded-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#e1edfb] flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#1373e6]" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#151b26] mb-2">MoldSign</h3>
              <p className="text-sm text-[#6e7781]">
                Serviciul de semnătură electronică pentru profesioniștii din domeniul medical
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Button
                  onClick={()=> {handleMoldSignLogin(); localStorage.setItem('user-kind', 'doctor');}}
                  className="bg-[#1373e6] hover:bg-[#0058d2] px-8 py-6 text-lg"
                  disabled={isLoading}
                >
                  <FileDigit className="h-5 w-5 mr-2" />
                  {isLoading ? "Se conectează..." : "Autentificare cu MoldSign"}
                </Button>
              </div>

              <div className="text-center text-sm text-[#6e7781]">
                <p>Asigurați-vă că dispozitivul de semnătură electronică este conectat</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 border-t pt-6">
            <div className="text-center text-sm text-[#6e7781]">
              <p>
                Întâmpinați probleme?{" "}
                <Link href="/support" className="text-[#1373e6] hover:underline">
                  Contactați suportul tehnic
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

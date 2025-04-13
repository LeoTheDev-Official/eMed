"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Lock, User } from "lucide-react"
import Link from "next/link"
import axios from 'axios'


export default function PatientLoginPage() {
  const router = useRouter()
  const [idnp, setIdnp] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    localStorage.setItem('user-kind', 'patient');
    //const result = await axios.get('http://127.0.0.1:8000/check_user?idnp=' + idnp);
    //console.log(result.data);



    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleMPassLogin = () => {
    setIsLoading(true)
    localStorage.setItem('user-kind', 'patient');
    // Simulate MPass authentication
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
            <CardTitle className="text-2xl text-[#151b26]">Autentificare Pacient</CardTitle>
            <CardDescription className="text-[#6e7781]">Alegeți metoda de autentificare preferată</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="idnp" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="idnp">IDNP</TabsTrigger>
                <TabsTrigger value="mpass">MPass</TabsTrigger>
              </TabsList>

              <TabsContent value="idnp">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="idnp" className="text-[#151b26]">
                        IDNP
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-[#6e7781]" />
                        <Input
                          id="idnp"
                          placeholder="Introduceți IDNP-ul"
                          className="pl-10 border-[#e0e4ea]"
                          value={idnp}
                          onChange={(e) => setIdnp(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-[#151b26]">
                          Parola
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-[#1373e6] hover:underline">
                          Ați uitat parola?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-[#6e7781]" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Introduceți parola"
                          className="pl-10 border-[#e0e4ea]"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div> */}

                    <Button type="submit" className="w-full bg-[#1373e6] hover:bg-[#0058d2]" disabled={isLoading}>
                      {isLoading ? "Se autentifică..." : "Autentificare"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="mpass">
                <div className="space-y-6">
                  <div className="bg-[#f6fafe] border border-[#bddbfd] rounded-md p-4 text-center">
                    <p className="text-[#151b26] mb-2">Autentificare prin MPass</p>
                    <p className="text-sm text-[#6e7781]">
                      Serviciul guvernamental de autentificare și control al accesului
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={() => {handleMPassLogin();}}
                      className="bg-[#1373e6] hover:bg-[#0058d2] px-8"
                      disabled={isLoading}
                    >
                      {isLoading ? "Se conectează..." : "Conectare prin MPass"}
                    </Button>
                  </div>

                  <div className="text-center text-sm text-[#6e7781]">
                    <p>Veți fi redirecționat către portalul MPass pentru autentificare</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

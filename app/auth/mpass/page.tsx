"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function MPassPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState("")



  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">MPass Authentication</CardTitle>
          <CardDescription>Sign in securely with your MPass mobile application</CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+373 XXXXXXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the code from MPass app"
              />
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="link"
                  className="text-teal-600 p-0 h-auto"
                  onClick={() => alert("Code sent to your MPass app")}
                >
                  Send Code
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Link href="/dashboard" className="w-full">
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" >
                Authenticate
              </Button>
            </Link>
            <Button type="button" variant="outline" className="w-full" onClick={() => router.push("/")}>
              Back to Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

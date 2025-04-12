"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MSignPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate MSign authentication
    setTimeout(() => {
      setIsLoading(false)
      // Check if user has completed profile
      const hasCompletedProfile = false // This would be determined by your auth system

      if (hasCompletedProfile) {
        router.push("/dashboard")
      } else {
        router.push("/onboarding")
      }
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">MSign Authentication</CardTitle>
          <CardDescription>Sign in securely with your MSign digital signature</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="certificate">Digital Certificate</Label>
              <Input id="certificate" type="file" />
              <p className="text-sm text-slate-500">Upload your MSign digital certificate</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Certificate Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isLoading}>
              {isLoading ? "Authenticating..." : "Authenticate"}
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={() => router.push("/")}>
              Back to Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

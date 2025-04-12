"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Complete Your Medical Profile</h1>
        <p className="text-slate-600 mb-8 text-center">
          This information helps us provide you with better healthcare services
        </p>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="medical">Medical History</TabsTrigger>
            <TabsTrigger value="insurance">Insurance Details</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Provide your basic personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input id="dateOfBirth" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="personalId">Personal ID Number</Label>
                    <Input id="personalId" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Registered Address</Label>
                    <Textarea id="address" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => document.getElementById("medical-tab")?.click()}>Next: Medical History</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="medical" className="space-y-6" id="medical-tab">
              <Card>
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                  <CardDescription>Information about your health conditions and history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="familyDoctor">Family Doctor</Label>
                    <Input id="familyDoctor" placeholder="Dr. John Smith" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalInstitution">Registered Medical Institution</Label>
                    <Input id="medicalInstitution" placeholder="City Hospital" />
                  </div>

                  <div className="space-y-2">
                    <Label>Do you have any chronic conditions?</Label>
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="chronic-yes" />
                        <Label htmlFor="chronic-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="chronic-no" />
                        <Label htmlFor="chronic-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chronicDetails">If yes, please specify:</Label>
                    <Textarea id="chronicDetails" placeholder="Describe your chronic conditions" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies</Label>
                    <Textarea id="allergies" placeholder="List any allergies you have" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea id="medications" placeholder="List any medications you are currently taking" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="surgeries">Previous Surgeries</Label>
                    <Textarea id="surgeries" placeholder="List any surgeries you've had with dates" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => document.getElementById("personal-tab")?.click()}>
                    Back
                  </Button>
                  <Button onClick={() => document.getElementById("insurance-tab")?.click()}>
                    Next: Insurance Details
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="insurance" className="space-y-6" id="insurance-tab">
              <Card>
                <CardHeader>
                  <CardTitle>Insurance Details</CardTitle>
                  <CardDescription>Information about your health insurance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Insurance Type</Label>
                    <RadioGroup defaultValue="state">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="state" id="insurance-state" />
                        <Label htmlFor="insurance-state">State Insurance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="private" id="insurance-private" />
                        <Label htmlFor="insurance-private">Private Insurance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="insurance-both" />
                        <Label htmlFor="insurance-both">Both</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insuranceNumber">Insurance Policy Number</Label>
                    <Input id="insuranceNumber" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insuranceProvider">Insurance Provider (if private)</Label>
                    <Input id="insuranceProvider" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insuranceExpiry">Policy Expiry Date</Label>
                    <Input id="insuranceExpiry" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea id="additionalInfo" placeholder="Any other relevant information" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => document.getElementById("medical-tab")?.click()}>
                    Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Complete Profile"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </Tabs>
      </div>
    </div>
  )
}

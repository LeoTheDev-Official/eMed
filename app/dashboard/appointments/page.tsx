"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft } from "lucide-react"

export default function NewAppointmentPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null)
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showChatDialog, setShowChatDialog] = useState(false)

  const handleBodyPartSelect = (part: string) => {
    setSelectedBodyPart(part)
    // Based on body part, suggest a specialty
    const specialtyMap: Record<string, string> = {
      head: "Neurology",
      chest: "Cardiology",
      abdomen: "Gastroenterology",
      arm: "Orthopedics",
      leg: "Orthopedics",
      back: "Orthopedics",
      skin: "Dermatology",
    }
    setSelectedSpecialty(specialtyMap[part] || null)
    setStep(2)
  }

  const handleSpecialtySelect = (specialty: string) => {
    setSelectedSpecialty(specialty)
    setStep(3)
    // In a real app, this would trigger the chat with receptionist
    setShowChatDialog(true)
  }

  const handleDoctorSelect = (doctor: string) => {
    setSelectedDoctor(doctor)
    setShowChatDialog(false)
    setStep(4)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(5)
  }

  const handleSubmit = () => {
    // In a real app, this would submit the appointment
    router.push("/dashboard/appointments/confirmation")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" className="text-[#6e7781]" onClick={() => router.back()}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-[#151b26] ml-2">Schedule New Appointment</h1>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="w-full bg-[#e0e4ea] h-2 absolute"></div>
            <div
              className="bg-[#1373e6] h-2 absolute transition-all duration-300 ease-in-out"
              style={{ width: `${step * 20}%` }}
            ></div>
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center z-0 ${
                  s <= step ? "bg-[#1373e6] text-white" : "bg-[#e0e4ea] text-[#6e7781]"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2 text-sm text-[#6e7781]">
            <span>Select Area</span>
            <span>Specialty</span>
            <span>Doctor</span>
            <span>Date & Time</span>
            <span>Confirm</span>
          </div>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#151b26]">
              {step === 1 && "Select Body Area"}
              {step === 2 && "Select Specialty"}
              {step === 3 && "Select Doctor"}
              {step === 4 && "Select Date & Time"}
              {step === 5 && "Confirm Appointment"}
            </CardTitle>
            <CardDescription className="text-[#6e7781]">
              {step === 1 && "Click on the area where you're experiencing issues"}
              {step === 2 && "Choose a medical specialty for your appointment"}
              {step === 3 && "Select a doctor from the available options"}
              {step === 4 && "Choose a convenient date and time"}
              {step === 5 && "Review and confirm your appointment details"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
                <Tabs defaultValue="body-map" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="body-map">Body Map</TabsTrigger>
                    <TabsTrigger value="specialty">Direct Specialty</TabsTrigger>
                  </TabsList>

                  <TabsContent value="body-map" className="space-y-4 ">
                    <div className="relative w-full max-w-md mx-auto">
                      <svg viewBox="0 0 200 400" className="w-full h-auto">
                        {/* Simple human body outline */}
                        <circle
                          cx="100"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("head")}
                        />
                        <rect
                          x="60"
                          y="90"
                          width="80"
                          height="100"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("chest")}
                        />
                        <rect
                          x="60"
                          y="190"
                          width="80"
                          height="60"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("abdomen")}
                        />
                        <rect
                          x="40"
                          y="90"
                          width="20"
                          height="120"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("arm")}
                        />
                        <rect
                          x="140"
                          y="90"
                          width="20"
                          height="120"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("arm")}
                        />
                        <rect
                          x="60"
                          y="250"
                          width="30"
                          height="120"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("leg")}
                        />
                        <rect
                          x="110"
                          y="250"
                          width="30"
                          height="120"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("leg")}
                        />
                      </svg>

                      {selectedBodyPart && (
                        <div className="mt-4 p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md">
                          <p className="font-medium text-[#151b26]">
                            Selected area: <span className="text-[#1373e6]">{selectedBodyPart}</span>
                          </p>
                          <p className="text-sm text-[#6e7781]">
                            Recommended specialty: <span className="font-medium">{selectedSpecialty}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="specialty" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Cardiology",
                        "Dermatology",
                        "Gastroenterology",
                        "Neurology",
                        "Orthopedics",
                        "Pediatrics",
                        "Psychiatry",
                        "Ophthalmology",
                        "General Practice",
                      ].map((specialty) => (
                        <Button
                          key={specialty}
                          variant="outline"
                          className="h-24 flex flex-col items-center justify-center space-y-2 hover:bg-[#f6fafe] hover:border-[#bddbfd] border-[#e0e4ea] text-[#151b26]"
                          onClick={() => handleSpecialtySelect(specialty)}
                        >
                          <span>{specialty}</span>
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md mb-4">
                  <p className="font-medium text-[#151b26]">
                    Selected area: <span className="text-[#1373e6]">{selectedBodyPart}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <Label className="text-[#151b26]">Select Specialty</Label>
                  <RadioGroup
                    defaultValue={selectedSpecialty || undefined}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {[
                      "Cardiology",
                      "Dermatology",
                      "Gastroenterology",
                      "Neurology",
                      "Orthopedics",
                      "Pediatrics",
                      "General Practice",
                    ].map((specialty) => (
                      <div
                        key={specialty}
                        className="flex items-center space-x-2 p-3 border border-[#e0e4ea] rounded-md hover:bg-[#f6fafe]"
                      >
                        <RadioGroupItem
                          value={specialty}
                          id={`specialty-${specialty}`}
                          onClick={() => setSelectedSpecialty(specialty)}
                        />
                        <Label htmlFor={`specialty-${specialty}`} className="flex-1 cursor-pointer text-[#151b26]">
                          {specialty}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)} className="border-[#e0e4ea] text-[#6e7781]">
                    Back
                  </Button>
                  <Button
                    onClick={() => handleSpecialtySelect(selectedSpecialty || "General Practice")}
                    className="bg-[#1373e6] hover:bg-[#0058d2]"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md mb-4">
                  <p className="font-medium text-[#151b26]">
                    Selected specialty: <span className="text-[#1373e6]">{selectedSpecialty}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <Label className="text-[#151b26]">Select Doctor</Label>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "Dr. Sarah Johnson", location: "City Hospital", distance: "1.2 km", available: "Today" },
                      {
                        name: "Dr. Michael Chen",
                        location: "Medical Center",
                        distance: "3.5 km",
                        available: "Tomorrow",
                      },
                      {
                        name: "Dr. Emily Rodriguez",
                        location: "Health Clinic",
                        distance: "5.0 km",
                        available: "Apr 15",
                      },
                    ].map((doctor) => (
                      <div
                        key={doctor.name}
                        className="flex items-center justify-between p-4 border border-[#e0e4ea] rounded-md hover:bg-[#f6fafe] cursor-pointer"
                        onClick={() => handleDoctorSelect(doctor.name)}
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12 border border-[#e0e4ea]">
                            <AvatarImage src="/placeholder.svg?height=48&width=48" alt={doctor.name} />
                            <AvatarFallback className="bg-[#1373e6] text-white">
                              {doctor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-[#151b26]">{doctor.name}</p>
                            <p className="text-sm text-[#6e7781]">
                              {doctor.location} • {doctor.distance}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-[#f6fafe] text-[#1373e6] border-[#bddbfd]">
                          Available {doctor.available}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)} className="border-[#e0e4ea] text-[#6e7781]">
                    Back
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md mb-4">
                  <p className="font-medium text-[#151b26]">
                    Selected doctor: <span className="text-[#1373e6]">{selectedDoctor}</span>
                  </p>
                  <p className="text-sm text-[#6e7781]">Specialty: {selectedSpecialty}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-2 block text-[#151b26]">Select Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="border border-[#e0e4ea] rounded-md p-2"
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block text-[#151b26]">Select Time</Label>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-2">
                        {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30"].map(
                          (time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              className={selectedTime === time ? "bg-[#1373e6]" : "border-[#e0e4ea] text-[#151b26]"}
                              onClick={() => handleTimeSelect(time)}
                            >
                              {time}
                            </Button>
                          ),
                        )}
                      </div>
                    ) : (
                      <div className="p-4 border border-[#e0e4ea] rounded-md bg-[#f9f9f9] text-[#6e7781] text-center">
                        Please select a date first
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(3)} className="border-[#e0e4ea] text-[#6e7781]">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(5)}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-[#1373e6] hover:bg-[#0058d2]"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <div className="p-6 border border-[#e0e4ea] rounded-md bg-[#f6fafe]">
                  <h3 className="text-xl font-semibold mb-4 text-[#151b26]">Appointment Summary</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Doctor:</p>
                      <p className="col-span-2 font-medium text-[#151b26]">{selectedDoctor}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Specialty:</p>
                      <p className="col-span-2 text-[#151b26]">{selectedSpecialty}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Date:</p>
                      <p className="col-span-2 text-[#151b26]">{selectedDate?.toLocaleDateString()}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Time:</p>
                      <p className="col-span-2 text-[#151b26]">{selectedTime}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Location:</p>
                      <p className="col-span-2 text-[#151b26]">City Hospital, Main Building, Floor 3</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-[#151b26]">
                    Additional Notes (optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional information for the doctor"
                    className="border-[#e0e4ea]"
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(4)} className="border-[#e0e4ea] text-[#6e7781]">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} className="bg-[#1373e6] hover:bg-[#0058d2]">
                    Confirm Appointment
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* <Dialog open={showChatDialog} onOpenChange={setShowChatDialog}>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle className="text-[#151b26]">Chat with Receptionist</DialogTitle>
              <DialogDescription className="text-[#6e7781]">
                Our receptionist will help you find the right doctor
              </DialogDescription>
            </DialogHeader>

            <div className="max-h-[400px] overflow-y-auto p-4 border border-[#e0e4ea] rounded-md space-y-4">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Receptionist" />
                  <AvatarFallback className="bg-[#1373e6] text-white">RC</AvatarFallback>
                </Avatar>
                <div className="bg-[#f6fafe] rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm font-medium text-[#151b26]">Receptionist</p>
                  <p className="text-[#6e7781]">
                    Hello! I see you're looking for a {selectedSpecialty} specialist. We have several doctors available
                    in your area.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Receptionist" />
                  <AvatarFallback className="bg-[#1373e6] text-white">RC</AvatarFallback>
                </Avatar>
                <div className="bg-[#f6fafe] rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm font-medium text-[#151b26]">Receptionist</p>
                  <p className="text-[#6e7781]">Here are the nearest doctors from your location:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-[#6e7781]">
                    <li>Dr. Sarah Johnson - City Hospital (1.2 km)</li>
                    <li>Dr. Michael Chen - Medical Center (3.5 km)</li>
                    <li>Dr. Emily Rodriguez - Health Clinic (5.0 km)</li>
                  </ul>
                  <p className="mt-2 text-[#6e7781]">Which doctor would you prefer?</p>
                </div>
              </div>
            </div>

            <DialogFooter className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handleDoctorSelect("Dr. Sarah Johnson")}
                className="border-[#e0e4ea] text-[#151b26]"
              >
                Dr. Sarah Johnson
              </Button>
              <Button
                variant="outline"
                onClick={() => handleDoctorSelect("Dr. Michael Chen")}
                className="border-[#e0e4ea] text-[#151b26]"
              >
                Dr. Michael Chen
              </Button>
              <Button
                variant="outline"
                onClick={() => handleDoctorSelect("Dr. Emily Rodriguez")}
                className="border-[#e0e4ea] text-[#151b26]"
              >
                Dr. Emily Rodriguez
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
  const [directDoctorSelect, setDirectDoctorSelect] = useState(false)

  const handleBodyPartSelect = (part: string) => {
    setSelectedBodyPart(part)
    // Based on body part, suggest a specialty
    const specialtyMap: Record<string, string> = {
      head: "Neurologie",
      chest: "Cardiologie",
      abdomen: "Gastroenterologie",
      arm: "Ortopedie",
      leg: "Ortopedie",
      back: "Ortopedie",
      skin: "Dermatologie",
    }
    setSelectedSpecialty(specialtyMap[part] || null)
    setStep(2)
  }

  const handleSpecialtySelect = (specialty: string) => {
    setSelectedSpecialty(specialty)
    setStep(3)
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
            Înapoi
          </Button>
          <h1 className="text-2xl font-bold text-[#151b26] ml-2">Programare Nouă</h1>
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
            <span>Selectare Zonă</span>
            <span>Specialitate</span>
            <span>Doctor</span>
            <span>Data & Ora</span>
            <span>Confirmare</span>
          </div>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#151b26]">
              {step === 1 && "Selectați Zona Corpului"}
              {step === 2 && "Selectați Specialitatea"}
              {step === 3 && "Selectați Doctorul"}
              {step === 4 && "Selectați Data și Ora"}
              {step === 5 && "Confirmați Programarea"}
            </CardTitle>
            <CardDescription className="text-[#6e7781]">
              {step === 1 && "Faceți click pe zona unde aveți probleme sau selectați direct un doctor"}
              {step === 2 && "Alegeți o specialitate medicală pentru programarea dumneavoastră"}
              {step === 3 && "Selectați un doctor din opțiunile disponibile"}
              {step === 4 && "Alegeți o dată și oră convenabilă"}
              {step === 5 && "Verificați și confirmați detaliile programării"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
                <Tabs defaultValue="body-map" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="body-map">Hartă Corp</TabsTrigger>
                    <TabsTrigger value="direct-doctor" onClick={() => setDirectDoctorSelect(true)}>
                      Selectare Doctor
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="body-map" className="space-y-4">
                    <div className="relative w-full max-w-md mx-auto">
                      <svg viewBox="0 0 300 500" className="w-full h-auto">
                        {/* Cap */}
                        <circle
                          cx="150"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("head")}
                        />

                        {/* Gât */}
                        <rect
                          x="135"
                          y="110"
                          width="30"
                          height="20"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />

                        {/* Piept */}
                        <rect
                          x="100"
                          y="130"
                          width="100"
                          height="80"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("chest")}
                        />

                        {/* Abdomen */}
                        <rect
                          x="100"
                          y="210"
                          width="100"
                          height="70"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("abdomen")}
                        />

                        {/* Pelvis */}
                        <rect
                          x="100"
                          y="280"
                          width="100"
                          height="40"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />

                        {/* Brațe */}
                        <rect
                          x="50"
                          y="130"
                          width="50"
                          height="20"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />
                        <rect
                          x="200"
                          y="130"
                          width="50"
                          height="20"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />

                        {/* Antebrațe */}
                        <rect
                          x="30"
                          y="150"
                          width="20"
                          height="80"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("arm")}
                        />
                        <rect
                          x="250"
                          y="150"
                          width="20"
                          height="80"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("arm")}
                        />

                        {/* Mâini */}
                        <circle
                          cx="40"
                          cy="250"
                          r="15"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />
                        <circle
                          cx="260"
                          cy="250"
                          r="15"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />

                        {/* Picioare */}
                        <rect
                          x="100"
                          y="320"
                          width="40"
                          height="150"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("leg")}
                        />
                        <rect
                          x="160"
                          y="320"
                          width="40"
                          height="150"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                          onClick={() => handleBodyPartSelect("leg")}
                        />

                        {/* Picioare */}
                        <ellipse
                          cx="120"
                          cy="480"
                          rx="25"
                          ry="15"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />
                        <ellipse
                          cx="180"
                          cy="480"
                          rx="25"
                          ry="15"
                          fill="none"
                          stroke="#151b26"
                          strokeWidth="2"
                          className="cursor-pointer hover:fill-[#e1edfb]"
                        />
                      </svg>

                      {selectedBodyPart && (
                        <div className="mt-4 p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md">
                          <p className="font-medium text-[#151b26]">
                            Zonă selectată: <span className="text-[#1373e6]">{selectedBodyPart}</span>
                          </p>
                          <p className="text-sm text-[#6e7781]">
                            Specialitate recomandată: <span className="font-medium">{selectedSpecialty}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="direct-doctor" className="space-y-4">
                    <div className="p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md mb-4">
                      <p className="font-medium text-[#151b26]">
                        Medicul dumneavoastră de familie: <span className="text-[#1373e6]">Dr. Ana Munteanu</span>
                      </p>
                      <p className="text-sm text-[#6e7781]">
                        Centrul Medical: <span className="font-medium">Centrul Medical "MedPlus"</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div
                        className="flex items-center justify-between p-4 border border-[#e0e4ea] rounded-md hover:bg-[#f6fafe] cursor-pointer"
                        onClick={() => {
                          setSelectedDoctor("Dr. Ana Munteanu")
                          setSelectedSpecialty("Medicină de Familie")
                          setStep(4)
                        }}
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12 border border-[#e0e4ea]">
                            <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Ana Munteanu" />
                            <AvatarFallback className="bg-[#1373e6] text-white">AM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-[#151b26]">Dr. Ana Munteanu</p>
                            <p className="text-sm text-[#6e7781]">Medicină de Familie • Centrul Medical "MedPlus"</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-[#f6fafe] text-[#1373e6] border-[#bddbfd]">
                          Medicul Dumneavoastră
                        </Badge>
                      </div>

                      <div className="mt-4 mb-2">
                        <h3 className="font-medium text-[#151b26]">Alți Doctori Disponibili</h3>
                      </div>

                      {[
                        {
                          name: "Dr. Maria Ionescu",
                          specialty: "Cardiologie",
                          location: "Spitalul Municipal",
                          distance: "1.2 km",
                          available: "Astăzi",
                        },
                        {
                          name: "Dr. Mihai Popa",
                          specialty: "Medicină Generală",
                          location: "Centrul Medical",
                          distance: "3.5 km",
                          available: "Mâine",
                        },
                        {
                          name: "Dr. Elena Radu",
                          specialty: "Dermatologie",
                          location: "Clinica de Sănătate",
                          distance: "5.0 km",
                          available: "15 Apr",
                        },
                      ].map((doctor) => (
                        <div
                          key={doctor.name}
                          className="flex items-center justify-between p-4 border border-[#e0e4ea] rounded-md hover:bg-[#f6fafe] cursor-pointer"
                          onClick={() => {
                            setSelectedDoctor(doctor.name)
                            setSelectedSpecialty(doctor.specialty)
                            setStep(4)
                          }}
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
                                {doctor.specialty} • {doctor.location} • {doctor.distance}
                              </p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-[#f6fafe] text-[#1373e6] border-[#bddbfd]">
                            Disponibil {doctor.available}
                          </Badge>
                        </div>
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
                    Zonă selectată: <span className="text-[#1373e6]">{selectedBodyPart}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <Label className="text-[#151b26]">Selectați Specialitatea</Label>
                  <RadioGroup
                    defaultValue={selectedSpecialty || undefined}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {[
                      "Cardiologie",
                      "Dermatologie",
                      "Gastroenterologie",
                      "Neurologie",
                      "Ortopedie",
                      "Pediatrie",
                      "Medicină Generală",
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
                    Înapoi
                  </Button>
                  <Button
                    onClick={() => handleSpecialtySelect(selectedSpecialty || "Medicină Generală")}
                    className="bg-[#1373e6] hover:bg-[#0058d2]"
                  >
                    Continuare
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md mb-4">
                  <p className="font-medium text-[#151b26]">
                    Specialitate selectată: <span className="text-[#1373e6]">{selectedSpecialty}</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <Label className="text-[#151b26]">Selectați Doctorul</Label>
                  <div className="grid grid-cols-1 gap-4">
                    <div
                      className="flex items-center justify-between p-4 border-2 border-[#1373e6] rounded-md bg-[#f6fafe] cursor-pointer"
                      onClick={() => handleDoctorSelect("Dr. Ana Munteanu")}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border border-[#e0e4ea]">
                          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Dr. Ana Munteanu" />
                          <AvatarFallback className="bg-[#1373e6] text-white">AM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-[#151b26]">Dr. Ana Munteanu</p>
                          <p className="text-sm text-[#6e7781]">Centrul Medical "MedPlus" • 0.5 km</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-[#f6fafe] text-[#1373e6] border-[#bddbfd]">
                        Medicul Dumneavoastră
                      </Badge>
                    </div>

                    {[
                      {
                        name: "Dr. Maria Ionescu",
                        location: "Spitalul Municipal",
                        distance: "1.2 km",
                        available: "Astăzi",
                      },
                      { name: "Dr. Mihai Popa", location: "Centrul Medical", distance: "3.5 km", available: "Mâine" },
                      {
                        name: "Dr. Elena Radu",
                        location: "Clinica de Sănătate",
                        distance: "5.0 km",
                        available: "15 Apr",
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
                          Disponibil {doctor.available}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)} className="border-[#e0e4ea] text-[#6e7781]">
                    Înapoi
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="p-4 bg-[#f6fafe] border border-[#bddbfd] rounded-md mb-4">
                  <p className="font-medium text-[#151b26]">
                    Doctor selectat: <span className="text-[#1373e6]">{selectedDoctor}</span>
                  </p>
                  <p className="text-sm text-[#6e7781]">Specialitate: {selectedSpecialty}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="mb-2 block text-[#151b26]">Selectați Data</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="border border-[#e0e4ea] rounded-md p-2"
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block text-[#151b26]">Selectați Ora</Label>
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
                        Vă rugăm să selectați mai întâi o dată
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(3)} className="border-[#e0e4ea] text-[#6e7781]">
                    Înapoi
                  </Button>
                  <Button
                    onClick={() => setStep(5)}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-[#1373e6] hover:bg-[#0058d2]"
                  >
                    Continuare
                  </Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <div className="p-6 border border-[#e0e4ea] rounded-md bg-[#f6fafe]">
                  <h3 className="text-xl font-semibold mb-4 text-[#151b26]">Rezumat Programare</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Doctor:</p>
                      <p className="col-span-2 font-medium text-[#151b26]">{selectedDoctor}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Specialitate:</p>
                      <p className="col-span-2 text-[#151b26]">{selectedSpecialty}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Data:</p>
                      <p className="col-span-2 text-[#151b26]">{selectedDate?.toLocaleDateString()}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Ora:</p>
                      <p className="col-span-2 text-[#151b26]">{selectedTime}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-[#6e7781]">Locație:</p>
                      <p className="col-span-2 text-[#151b26]">Centrul Medical "MedPlus", Etaj 3</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-[#151b26]">
                    Note Adiționale (opțional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Orice informații suplimentare pentru doctor"
                    className="border-[#e0e4ea]"
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(4)} className="border-[#e0e4ea] text-[#6e7781]">
                    Înapoi
                  </Button>
                  <Button onClick={handleSubmit} className="bg-[#1373e6] hover:bg-[#0058d2]">
                    Confirmă Programarea
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

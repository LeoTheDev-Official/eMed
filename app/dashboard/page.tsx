"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, FileText, User, Syringe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect } from "react"
export default function DashboardPage() {

  const [p1, setP1] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("user-kind");
    setP1(storedName);
    console.log(storedName);
  }, []); // Runs once on client after mount
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Card className="shadow-sm">
            <CardHeader className="">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 border-2 border-blue-100">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                  <AvatarFallback className="bg-[#1373e6] text-white">IP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-[#151b26]">{p1 === "patient" ? "Ion Popescu" : "Dr. Maria Negru"}</CardTitle>
                  <CardDescription className="text-[#6e7781]">
                    {p1 === "patient" ? "Pacient" : "Doctor"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            {/* <CardContent>
              <Tabs defaultValue="appointments" className="w-full mt-4">
                <TabsList className="grid grid-cols-3 w-full mb-4">
                  <TabsTrigger value="appointments">Programări</TabsTrigger>
                  <TabsTrigger value="profile">Profil</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent> */}
          </Card>
          {(p1 === "doctor") ?(
          <Card className="shadow-sm mt-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-[#151b26]">Statistici Rapide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#6e7781] text-sm">Programări Viitoare</span>
                <span className="font-medium text-[#151b26]">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6e7781] text-sm">Mesaje Necitite</span>
                <span className="font-medium text-[#151b26]">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6e7781] text-sm">Fișe Recente</span>
                <span className="font-medium text-[#151b26]">5</span>
              </div>
            </div>
          </CardContent>
        </Card>):(<></>)}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">{p1 === "patient" ? <PatientDashboard /> : <DoctorDashboard />}</div>
      </div>
    </div>
  )
}

function PatientDashboard() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="appointments" className="w-full">
        <TabsContent value="appointments">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#151b26]">Cabinetul Personal</h1>
            <Link href="/dashboard/appointments/new">
              <Button className="bg-[#1373e6] hover:bg-[#0058d2]"><CalendarDays className="h-4 w-4 mr-2" />Programare Nouă</Button>
            </Link>
          </div>


          <Tabs defaultValue="programari" className="w-full mt-6">
            <TabsList className="grid grid-cols-3 w-full max-w-lg">
              <TabsTrigger value="programari" className="text-sm">Programări</TabsTrigger>
              <TabsTrigger value="profil" className="text-sm">Profil</TabsTrigger>
              <TabsTrigger value="calendar" className="text-sm">Calendar</TabsTrigger>
            </TabsList>
            <TabsContent value="programari" className="w-full mt-4">
            <Tabs defaultValue="upcoming" className="w-full mt-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="upcoming" className="text-sm">
                Viitoare
              </TabsTrigger>
              <TabsTrigger value="past" className="text-sm">
                Trecute
              </TabsTrigger>
              <TabsTrigger value="canceled" className="text-sm">
                Anulate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppointmentCard
                  doctor="Dr. Maria Ionescu"
                  specialty="Cardiologie"
                  date="15 Aprilie 2025"
                  time="10:30"
                  status="confirmed"
                />
                <AppointmentCard
                  doctor="Dr. Mihai Popa"
                  specialty="Consultație Generală"
                  date="22 Aprilie 2025"
                  time="14:00"
                  status="pending"
                />
                <AppointmentCard
                  doctor="Dr. Elena Radu"
                  specialty="Dermatologie"
                  date="3 Mai 2025"
                  time="11:15"
                  status="confirmed"
                />
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppointmentCard
                  doctor="Dr. Andrei Dumitru"
                  specialty="Ortopedie"
                  date="10 Martie 2025"
                  time="09:00"
                  status="completed"
                />
                <AppointmentCard
                  doctor="Dr. Maria Ionescu"
                  specialty="Cardiologie"
                  date="22 Februarie 2025"
                  time="15:30"
                  status="completed"
                />
              </div>
            </TabsContent>

            <TabsContent value="canceled" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppointmentCard
                  doctor="Dr. Robert Munteanu"
                  specialty="Neurologie"
                  date="5 Martie 2025"
                  time="13:45"
                  status="canceled"
                />
              </div>
            </TabsContent>
          </Tabs>
            
            </TabsContent>
            <TabsContent value="profil">
            <div className="">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-sm col-span-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-4">
                        <User className="h-12 w-12 text-[#1373e6]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#151b26] mb-1">Ion Popescu</h3>
                      <p className="text-[#6e7781] mb-4">Pacient</p>
                      <Link href="/dashboard/profile/edit">
                        <Button variant="outline" className="w-full border-[#e0e4ea] text-[#6e7781]">
                          Editare Profil
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm col-span-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#151b26] mb-4">Detalii Personale</h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-[#6e7781]">Data Nașterii</p>
                          <p className="font-medium text-[#151b26]">15.05.1985</p>
                        </div>
                        <div>
                          <p className="text-sm text-[#6e7781]">IDNP</p>
                          <p className="font-medium text-[#151b26]">2002004123456</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-[#6e7781]">Grupa Sanguină</p>
                          <p className="font-medium text-[#151b26]">A Rh+</p>
                        </div>
                        <div>
                          <p className="text-sm text-[#6e7781]">Telefon</p>
                          <p className="font-medium text-[#151b26]">+373 69 123 456</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-[#6e7781]">Centru Medical</p>
                        <p className="font-medium text-[#151b26]">Centrul Medical "MedPlus"</p>
                      </div>

                      <div>
                        <p className="text-sm text-[#6e7781]">Medic de Familie</p>
                        <p className="font-medium text-[#151b26]">Dr. Ana Munteanu</p>
                      </div>

                      <div>
                        <p className="text-sm text-[#6e7781]">Poliță de Asigurare</p>
                        <p className="font-medium text-[#151b26]">Seria AS Nr. 123456789</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-[#e0e4ea]">
                      <h4 className="font-medium text-[#151b26] mb-2">Alergii</h4>
                      <p className="text-[#6e7781]">Penicilină, Polen</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium text-[#151b26] mb-2">Boli Cronice</h4>
                      <p className="text-[#6e7781]">Hipertensiune arterială, Diabet tip 2</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium text-[#151b26] mb-2">Intervenții Medicale Recente</h4>
                      <p className="text-[#6e7781]">Apendicectomie (2020)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm col-span-3">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#151b26]">Vaccinări</h3>
                      <Link href="/dashboard/vaccinations">
                        <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                          Vezi Toate
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">Vaccin Antigripal</p>
                            <p className="text-sm text-[#6e7781]">10 Octombrie 2024</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">COVID-19 Booster</p>
                            <p className="text-sm text-[#6e7781]">5 Ianuarie 2025</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm col-span-3">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#151b26]">Fișe Medicale Recente</h3>
                      <Link href="/dashboard/medical-records">
                        <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                          Vezi Toate
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">Rezultate Analize Sânge</p>
                            <p className="text-sm text-[#6e7781]">28 Martie 2025</p>
                          </div>
                        </div>
                        <Link href="/dashboard/medical-records/123">
                          <Button variant="ghost" size="sm" className="text-[#1373e6]">
                            Vizualizare
                          </Button>
                        </Link>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">Examinare Fizică Anuală</p>
                            <p className="text-sm text-[#6e7781]">15 Februarie 2025</p>
                          </div>
                        </div>
                        <Link href="/dashboard/medical-records/456">
                          <Button variant="ghost" size="sm" className="text-[#1373e6]">
                            Vizualizare
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm col-span-3">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#151b26]">Copii</h3>
                      <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                        Adaugă Copil
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">Maria Popescu</p>
                            <p className="text-sm text-[#6e7781]">10 ani</p>
                          </div>
                        </div>
                        <Link href="/dashboard/children/1">
                          <Button variant="ghost" size="sm" className="text-[#1373e6]">
                            Vizualizare
                          </Button>
                        </Link>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">Alexandru Popescu</p>
                            <p className="text-sm text-[#6e7781]">5 ani</p>
                          </div>
                        </div>
                        <Link href="/dashboard/children/2">
                          <Button variant="ghost" size="sm" className="text-[#1373e6]">
                            Vizualizare
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="calendar">
            <div className="">

              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-7 gap-1">
                    {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                      <div key={i} className="text-center font-medium text-[#6e7781] p-2">
                        {day}
                      </div>
                    ))}

                    {Array.from({ length: 35 }).map((_, i) => {
                      const day = i - 2 // Offset to start month on correct day
                      const hasAppointment = [10, 15, 22].includes(day)

                      return (
                        <div
                          key={i}
                          className={`
                            h-24 p-1 border border-[#e0e4ea] relative
                            ${day < 1 || day > 30 ? "bg-[#f9f9f9]" : "bg-white"}
                          `}
                        >
                          {day > 0 && day <= 30 && (
                            <>
                              <div className="text-sm text-[#6e7781] p-1">{day}</div>
                              {hasAppointment && (
                                <div className="absolute bottom-1 left-1 right-1 bg-[#e1edfb] text-[#1373e6] text-xs p-1 rounded">
                                  {day === 10 && "Dr. Maria Ionescu 10:30"}
                                  {day === 15 && "Dr. Mihai Popa 14:00"}
                                  {day === 22 && "Dr. Elena Radu 11:15"}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="profile">
          <h1 className="text-2xl font-bold text-[#151b26] mb-6">Profilul Meu</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-[#1373e6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#151b26] mb-1">Ion Popescu</h3>
                  <p className="text-[#6e7781] mb-4">Pacient</p>
                  <Link href="/dashboard/profile/edit">
                    <Button variant="outline" className="w-full border-[#e0e4ea] text-[#6e7781]">
                      Editare Profil
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#151b26] mb-4">Detalii Personale</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#6e7781]">Data Nașterii</p>
                      <p className="font-medium text-[#151b26]">15.05.1985</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e7781]">IDNP</p>
                      <p className="font-medium text-[#151b26]">2002004123456</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#6e7781]">Grupa Sanguină</p>
                      <p className="font-medium text-[#151b26]">A Rh+</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e7781]">Telefon</p>
                      <p className="font-medium text-[#151b26]">+373 69 123 456</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Centru Medical</p>
                    <p className="font-medium text-[#151b26]">Centrul Medical "MedPlus"</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Medic de Familie</p>
                    <p className="font-medium text-[#151b26]">Dr. Ana Munteanu</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Poliță de Asigurare</p>
                    <p className="font-medium text-[#151b26]">Seria AS Nr. 123456789</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e0e4ea]">
                  <h4 className="font-medium text-[#151b26] mb-2">Alergii</h4>
                  <p className="text-[#6e7781]">Penicilină, Polen</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-[#151b26] mb-2">Boli Cronice</h4>
                  <p className="text-[#6e7781]">Hipertensiune arterială, Diabet tip 2</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-[#151b26] mb-2">Intervenții Medicale Recente</h4>
                  <p className="text-[#6e7781]">Apendicectomie (2020)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#151b26]">Vaccinări</h3>
                  <Link href="/dashboard/vaccinations">
                    <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                      Vezi Toate
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Vaccin Antigripal</p>
                        <p className="text-sm text-[#6e7781]">10 Octombrie 2024</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">COVID-19 Booster</p>
                        <p className="text-sm text-[#6e7781]">5 Ianuarie 2025</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#151b26]">Fișe Medicale Recente</h3>
                  <Link href="/dashboard/medical-records">
                    <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                      Vezi Toate
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Rezultate Analize Sânge</p>
                        <p className="text-sm text-[#6e7781]">28 Martie 2025</p>
                      </div>
                    </div>
                    <Link href="/dashboard/medical-records/123">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Examinare Fizică Anuală</p>
                        <p className="text-sm text-[#6e7781]">15 Februarie 2025</p>
                      </div>
                    </div>
                    <Link href="/dashboard/medical-records/456">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#151b26]">Copii</h3>
                  <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                    Adaugă Copil
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Maria Popescu</p>
                        <p className="text-sm text-[#6e7781]">10 ani</p>
                      </div>
                    </div>
                    <Link href="/dashboard/children/1">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Alexandru Popescu</p>
                        <p className="text-sm text-[#6e7781]">5 ani</p>
                      </div>
                    </div>
                    <Link href="/dashboard/children/2">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <h1 className="text-2xl font-bold text-[#151b26] mb-6">Calendar Programări</h1>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-1">
                {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                  <div key={i} className="text-center font-medium text-[#6e7781] p-2">
                    {day}
                  </div>
                ))}

                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2 // Offset to start month on correct day
                  const hasAppointment = [10, 15, 22].includes(day)

                  return (
                    <div
                      key={i}
                      className={`
                        h-24 p-1 border border-[#e0e4ea] relative
                        ${day < 1 || day > 30 ? "bg-[#f9f9f9]" : "bg-white"}
                      `}
                    >
                      {day > 0 && day <= 30 && (
                        <>
                          <div className="text-sm text-[#6e7781] p-1">{day}</div>
                          {hasAppointment && (
                            <div className="absolute bottom-1 left-1 right-1 bg-[#e1edfb] text-[#1373e6] text-xs p-1 rounded">
                              {day === 10 && "Dr. Maria Ionescu 10:30"}
                              {day === 15 && "Dr. Mihai Popa 14:00"}
                              {day === 22 && "Dr. Elena Radu 11:15"}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="appointments" className="w-full">
        <TabsContent value="appointments">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#151b26]">Cabinetul Personal</h1>
            <Link href="/dashboard/appointments/new">
              <Button className="bg-[#1373e6] hover:bg-[#0058d2]"><CalendarDays className="h-4 w-4 mr-2" />Programare Nouă</Button>
            </Link>
          </div>


          <Tabs defaultValue="programari" className="w-full mt-6">
            <TabsList className="grid grid-cols-3 w-full max-w-lg">
              <TabsTrigger value="programari" className="text-sm">Programări</TabsTrigger>
              <TabsTrigger value="profil" className="text-sm">Profil</TabsTrigger>
              <TabsTrigger value="calendar" className="text-sm">Calendar</TabsTrigger>
            </TabsList>
            <TabsContent value="programari" className="w-full mt-4">
            <div className="space-y-6">
      <Tabs defaultValue="schedule" className="w-full">
        <TabsContent value="schedule">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#151b26]">Programări Astăzi</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-[#e0e4ea] text-[#6e7781]">
                Săptămâna
              </Button>
              <Button variant="outline" className="border-[#e0e4ea] text-[#6e7781]">
                Luna
              </Button>
            </div>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border-l-4 border-[#1373e6] bg-[#f6fafe] rounded-r-md">
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-[#151b26] mr-2">Ion Popescu</p>
                      <span className="text-xs bg-[#e1edfb] text-[#1373e6] px-2 py-1 rounded">10:30</span>
                    </div>
                    <p className="text-sm text-[#6e7781]">Consultație Cardiologie</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-[#e0e4ea] text-[#6e7781]">
                      Detalii
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.5 1.5C1.5 2.32843 2.17157 3 3 3C3.82843 3 4.5 2.32843 4.5 1.5C4.5 0.671573 3.82843 0 3 0C2.17157 0 1.5 0.671573 1.5 1.5Z"
                              fill="#6e7781"
                            />
                            <path
                              d="M6 1.5C6 2.32843 6.67157 3 7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5Z"
                              fill="#6e7781"
                            />
                            <path
                              d="M10.5 1.5C10.5 2.32843 11.1716 3 12 3C12.8284 3 13.5 2.32843 13.5 1.5C13.5 0.671573 12.8284 0 12 0C11.1716 0 10.5 0.671573 10.5 1.5Z"
                              fill="#6e7781"
                            />
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Profil Pacient</DropdownMenuItem>
                        <DropdownMenuItem>Ticket Statistic</DropdownMenuItem>
                        <DropdownMenuItem>Programare Nouă</DropdownMenuItem>
                        <DropdownMenuItem className="text-[#16bf78]">Marcat ca Prezent</DropdownMenuItem>
                        <DropdownMenuItem className="text-[#d02746]">Marcat ca Absent</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 border-l-4 border-[#e0e4ea] bg-[#f9f9f9] rounded-r-md">
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-[#151b26] mr-2">Maria Georgescu</p>
                      <span className="text-xs bg-[#e1edfb] text-[#1373e6] px-2 py-1 rounded">11:15</span>
                    </div>
                    <p className="text-sm text-[#6e7781]">Control Medical</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-[#e0e4ea] text-[#6e7781]">
                      Detalii
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.5 1.5C1.5 2.32843 2.17157 3 3 3C3.82843 3 4.5 2.32843 4.5 1.5C4.5 0.671573 3.82843 0 3 0C2.17157 0 1.5 0.671573 1.5 1.5Z"
                              fill="#6e7781"
                            />
                            <path
                              d="M6 1.5C6 2.32843 6.67157 3 7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5Z"
                              fill="#6e7781"
                            />
                            <path
                              d="M10.5 1.5C10.5 2.32843 11.1716 3 12 3C12.8284 3 13.5 2.32843 13.5 1.5C13.5 0.671573 12.8284 0 12 0C11.1716 0 10.5 0.671573 10.5 1.5Z"
                              fill="#6e7781"
                            />
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Profil Pacient</DropdownMenuItem>
                        <DropdownMenuItem>Ticket Statistic</DropdownMenuItem>
                        <DropdownMenuItem>Programare Nouă</DropdownMenuItem>
                        <DropdownMenuItem className="text-[#16bf78]">Marcat ca Prezent</DropdownMenuItem>
                        <DropdownMenuItem className="text-[#d02746]">Marcat ca Absent</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 border-l-4 border-[#e0e4ea] bg-[#f9f9f9] rounded-r-md">
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-[#151b26] mr-2">Robert Ionescu</p>
                      <span className="text-xs bg-[#e1edfb] text-[#1373e6] px-2 py-1 rounded">14:00</span>
                    </div>
                    <p className="text-sm text-[#6e7781]">Pacient Nou</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-[#e0e4ea] text-[#6e7781]">
                      Detalii
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.5 1.5C1.5 2.32843 2.17157 3 3 3C3.82843 3 4.5 2.32843 4.5 1.5C4.5 0.671573 3.82843 0 3 0C2.17157 0 1.5 0.671573 1.5 1.5Z"
                              fill="#6e7781"
                            />
                            <path
                              d="M6 1.5C6 2.32843 6.67157 3 7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5Z"
                              fill="#6e7781"
                            />
                            <path
                              d="M10.5 1.5C10.5 2.32843 11.1716 3 12 3C12.8284 3 13.5 2.32843 13.5 1.5C13.5 0.671573 12.8284 0 12 0C11.1716 0 10.5 0.671573 10.5 1.5Z"
                              fill="#6e7781"
                            />
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Profil Pacient</DropdownMenuItem>
                        <DropdownMenuItem>Ticket Statistic</DropdownMenuItem>
                        <DropdownMenuItem>Programare Nouă</DropdownMenuItem>
                        <DropdownMenuItem className="text-[#16bf78]">Marcat ca Prezent</DropdownMenuItem>
                        <DropdownMenuItem className="text-[#d02746]">Marcat ca Absent</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <h1 className="text-2xl font-bold text-[#151b26] mb-6">Profilul Meu</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1373e6]"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                      <path d="M13 13h4"></path>
                      <path d="M13 17h4"></path>
                      <path d="M9 13h.01"></path>
                      <path d="M9 17h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#151b26] mb-1">Dr. Maria Ionescu</h3>
                  <p className="text-[#6e7781] mb-4">Cardiologie</p>
                  <Link href="/dashboard/profile/edit">
                    <Button variant="outline" className="w-full border-[#e0e4ea] text-[#6e7781]">
                      Editare Profil
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#151b26] mb-4">Detalii Personale</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#6e7781]">Data Nașterii</p>
                      <p className="font-medium text-[#151b26]">10.03.1975</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e7781]">IDNP</p>
                      <p className="font-medium text-[#151b26]">1975003123456</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#6e7781]">Grupa Sanguină</p>
                      <p className="font-medium text-[#151b26]">O Rh+</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e7781]">Telefon</p>
                      <p className="font-medium text-[#151b26]">+373 69 987 654</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Loc de Muncă</p>
                    <p className="font-medium text-[#151b26]">Centrul Medical "MedPlus"</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Specialitate</p>
                    <p className="font-medium text-[#151b26]">Cardiologie</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Licență Medicală</p>
                    <p className="font-medium text-[#151b26]">Nr. 123456789</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#151b26] mb-4">Program de Lucru</h3>

                <div className="grid grid-cols-5 gap-4">
                  <div className="text-center p-3 bg-[#f6fafe] rounded-md">
                    <p className="font-medium text-[#151b26] mb-1">Luni</p>
                    <p className="text-[#6e7781]">09:00 - 17:00</p>
                  </div>
                  <div className="text-center p-3 bg-[#f6fafe] rounded-md">
                    <p className="font-medium text-[#151b26] mb-1">Marți</p>
                    <p className="text-[#6e7781]">09:00 - 17:00</p>
                  </div>
                  <div className="text-center p-3 bg-[#f6fafe] rounded-md">
                    <p className="font-medium text-[#151b26] mb-1">Miercuri</p>
                    <p className="text-[#6e7781]">09:00 - 17:00</p>
                  </div>
                  <div className="text-center p-3 bg-[#f6fafe] rounded-md">
                    <p className="font-medium text-[#151b26] mb-1">Joi</p>
                    <p className="text-[#6e7781]">09:00 - 17:00</p>
                  </div>
                  <div className="text-center p-3 bg-[#f6fafe] rounded-md">
                    <p className="font-medium text-[#151b26] mb-1">Vineri</p>
                    <p className="text-[#6e7781]">09:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <h1 className="text-2xl font-bold text-[#151b26] mb-6">Calendar</h1>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-1">
                {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                  <div key={i} className="text-center font-medium text-[#6e7781] p-2">
                    {day}
                  </div>
                ))}

                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2 // Offset to start month on correct day
                  const hasAppointment = [3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26].includes(day)
                  const appointmentCount = hasAppointment ? Math.floor(Math.random() * 5) + 3 : 0

                  return (
                    <div
                      key={i}
                      className={`
                        h-24 p-1 border border-[#e0e4ea] relative
                        ${day < 1 || day > 30 ? "bg-[#f9f9f9]" : "bg-white"}
                      `}
                    >
                      {day > 0 && day <= 30 && (
                        <>
                          <div className="text-sm text-[#6e7781] p-1">{day}</div>
                          {hasAppointment && (
                            <div className="absolute bottom-1 left-1 right-1 bg-[#e1edfb] text-[#1373e6] text-xs p-1 rounded text-center">
                              {appointmentCount} programări
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
            
            </TabsContent>
            <TabsContent value="profil">
            <div className="">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-sm col-span-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-4">
                        <User className="h-12 w-12 text-[#1373e6]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#151b26] mb-1">Ion Popescu</h3>
                      <p className="text-[#6e7781] mb-4">Doctor</p>
                      <Link href="/dashboard/profile/edit">
                        <Button variant="outline" className="w-full border-[#e0e4ea] text-[#6e7781]">
                          Editare Profil
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm col-span-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#151b26] mb-4">Detalii Personale</h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-[#6e7781]">Data Nașterii</p>
                          <p className="font-medium text-[#151b26]">15.05.1985</p>
                        </div>
                        <div>
                          <p className="text-sm text-[#6e7781]">IDNP</p>
                          <p className="font-medium text-[#151b26]">2002004123456</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-[#6e7781]">Grupa Sanguină</p>
                          <p className="font-medium text-[#151b26]">A Rh+</p>
                        </div>
                        <div>
                          <p className="text-sm text-[#6e7781]">Telefon</p>
                          <p className="font-medium text-[#151b26]">+373 69 123 456</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-[#6e7781]">Centru Medical</p>
                        <p className="font-medium text-[#151b26]">Centrul Medical "MedPlus"</p>
                      </div>

                      <div>
                        <p className="text-sm text-[#6e7781]">Medic de Familie</p>
                        <p className="font-medium text-[#151b26]">Dr. Ana Munteanu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm col-span-3">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#151b26]">Vaccinări</h3>
                      <Link href="/dashboard/vaccinations">
                        <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                          Vezi Toate
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">Vaccin Antigripal</p>
                            <p className="text-sm text-[#6e7781]">10 Octombrie 2024</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                        <div className="flex items-center">
                          <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                          <div>
                            <p className="font-medium text-[#151b26]">COVID-19 Booster</p>
                            <p className="text-sm text-[#6e7781]">5 Ianuarie 2025</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="calendar">
            <div className="">

              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-7 gap-1">
                    {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                      <div key={i} className="text-center font-medium text-[#6e7781] p-2">
                        {day}
                      </div>
                    ))}

                    {Array.from({ length: 35 }).map((_, i) => {
                      const day = i - 2 // Offset to start month on correct day
                      const hasAppointment = [9, 12, 20].includes(day)

                      return (
                        <div
                          key={i}
                          className={`
                            h-24 p-1 border border-[#e0e4ea] relative
                            ${day < 1 || day > 30 ? "bg-[#f9f9f9]" : "bg-white"}
                          `}
                        >
                          {day > 0 && day <= 30 && (
                            <>
                              <div className="text-sm text-[#6e7781] p-1">{day}</div>
                              {hasAppointment && (
                                <div className="absolute bottom-1 left-1 right-1 bg-[#e1edfb] text-[#1373e6] text-xs p-1 rounded">
                                  {day === 9 && "Maria Ionescu 10:30"}
                                  {day === 12 && "Mihai Popa 14:00"}
                                  {day === 20 && "Elena Radu 11:15"}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="profile">
          <h1 className="text-2xl font-bold text-[#151b26] mb-6">Profilul Meu</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#e1edfb] flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-[#1373e6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#151b26] mb-1">Ion Popescu</h3>
                  <p className="text-[#6e7781] mb-4">Pacient</p>
                  <Link href="/dashboard/profile/edit">
                    <Button variant="outline" className="w-full border-[#e0e4ea] text-[#6e7781]">
                      Editare Profil
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#151b26] mb-4">Detalii Personale</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#6e7781]">Data Nașterii</p>
                      <p className="font-medium text-[#151b26]">15.05.1985</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e7781]">IDNP</p>
                      <p className="font-medium text-[#151b26]">2002004123456</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#6e7781]">Grupa Sanguină</p>
                      <p className="font-medium text-[#151b26]">A Rh+</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e7781]">Telefon</p>
                      <p className="font-medium text-[#151b26]">+373 69 123 456</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Centru Medical</p>
                    <p className="font-medium text-[#151b26]">Centrul Medical "MedPlus"</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Medic de Familie</p>
                    <p className="font-medium text-[#151b26]">Dr. Ana Munteanu</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#6e7781]">Poliță de Asigurare</p>
                    <p className="font-medium text-[#151b26]">Seria AS Nr. 123456789</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e0e4ea]">
                  <h4 className="font-medium text-[#151b26] mb-2">Alergii</h4>
                  <p className="text-[#6e7781]">Penicilină, Polen</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-[#151b26] mb-2">Boli Cronice</h4>
                  <p className="text-[#6e7781]">Hipertensiune arterială, Diabet tip 2</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-[#151b26] mb-2">Intervenții Medicale Recente</h4>
                  <p className="text-[#6e7781]">Apendicectomie (2020)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#151b26]">Vaccinări</h3>
                  <Link href="/dashboard/vaccinations">
                    <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                      Vezi Toate
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Vaccin Antigripal</p>
                        <p className="text-sm text-[#6e7781]">10 Octombrie 2024</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <Syringe className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">COVID-19 Booster</p>
                        <p className="text-sm text-[#6e7781]">5 Ianuarie 2025</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#16bf78]">Complet</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#151b26]">Fișe Medicale Recente</h3>
                  <Link href="/dashboard/medical-records">
                    <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                      Vezi Toate
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Rezultate Analize Sânge</p>
                        <p className="text-sm text-[#6e7781]">28 Martie 2025</p>
                      </div>
                    </div>
                    <Link href="/dashboard/medical-records/123">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Examinare Fizică Anuală</p>
                        <p className="text-sm text-[#6e7781]">15 Februarie 2025</p>
                      </div>
                    </div>
                    <Link href="/dashboard/medical-records/456">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm col-span-3">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#151b26]">Copii</h3>
                  <Button variant="outline" className="border-[#e0e4ea] text-[#1373e6]">
                    Adaugă Copil
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Maria Popescu</p>
                        <p className="text-sm text-[#6e7781]">10 ani</p>
                      </div>
                    </div>
                    <Link href="/dashboard/children/1">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#f6fafe] rounded-md">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-[#1373e6] mr-3" />
                      <div>
                        <p className="font-medium text-[#151b26]">Alexandru Popescu</p>
                        <p className="text-sm text-[#6e7781]">5 ani</p>
                      </div>
                    </div>
                    <Link href="/dashboard/children/2">
                      <Button variant="ghost" size="sm" className="text-[#1373e6]">
                        Vizualizare
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <h1 className="text-2xl font-bold text-[#151b26] mb-6">Calendar Programări</h1>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-1">
                {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                  <div key={i} className="text-center font-medium text-[#6e7781] p-2">
                    {day}
                  </div>
                ))}

                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2 // Offset to start month on correct day
                  const hasAppointment = [9, 18, 20].includes(day)

                  return (
                    <div
                      key={i}
                      className={`
                        h-24 p-1 border border-[#e0e4ea] relative
                        ${day < 1 || day > 30 ? "bg-[#f9f9f9]" : "bg-white"}
                      `}
                    >
                      {day > 0 && day <= 30 && (
                        <>
                          <div className="text-sm text-[#6e7781] p-1">{day}</div>
                          {hasAppointment && (
                            <div className="absolute bottom-1 left-1 right-1 bg-[#e1edfb] text-[#1373e6] text-xs p-1 rounded">
                              {day === 9 && "Maria Onescu 12:30"}
                              {day === 18 && "Popa Mihail 11:00"}
                              {day === 20 && "Elena Radu 14:15"}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AppointmentCard({
  doctor,
  specialty,
  date,
  time,
  status,
}: {
  doctor: string
  specialty: string
  date: string
  time: string
  status: "confirmed" | "pending" | "canceled" | "completed"
}) {
  const statusColors = {
    confirmed: "bg-[#16bf78] text-white",
    pending: "bg-[#ffd100] text-[#151b26]",
    canceled: "bg-[#d02746] text-white",
    completed: "bg-[#6e7781] text-white",
  }

  const statusText = {
    confirmed: "Confirmată",
    pending: "În așteptare",
    canceled: "Anulată",
    completed: "Finalizată",
  }

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium text-[#151b26]">{doctor}</h3>
            <p className="text-sm text-[#6e7781]">{specialty}</p>
          </div>
          <Badge className={statusColors[status]}>{statusText[status]}</Badge>
        </div>
        <div className="flex items-center text-[#6e7781] text-sm mb-3">
          <CalendarDays className="h-4 w-4 mr-2" />
          {date}
        </div>
        <div className="flex items-center text-[#6e7781] text-sm mb-4">
          <Clock className="h-4 w-4 mr-2" />
          {time}
        </div>
        <div className="flex justify-between">
          {status === "confirmed" && (
            <div className="flex items-center w-full">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea] flex-1">
                Detalii
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.5 1.5C1.5 2.32843 2.17157 3 3 3C3.82843 3 4.5 2.32843 4.5 1.5C4.5 0.671573 3.82843 0 3 0C2.17157 0 1.5 0.671573 1.5 1.5Z"
                        fill="#6e7781"
                      />
                      <path
                        d="M6 1.5C6 2.32843 6.67157 3 7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5Z"
                        fill="#6e7781"
                      />
                      <path
                        d="M10.5 1.5C10.5 2.32843 11.1716 3 12 3C12.8284 3 13.5 2.32843 13.5 1.5C13.5 0.671573 12.8284 0 12 0C11.1716 0 10.5 0.671573 10.5 1.5Z"
                        fill="#6e7781"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Anulare</DropdownMenuItem>
                  <DropdownMenuItem>Reprogramare</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {status === "pending" && (
            <div className="flex items-center w-full">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea] flex-1">
                Detalii
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.5 1.5C1.5 2.32843 2.17157 3 3 3C3.82843 3 4.5 2.32843 4.5 1.5C4.5 0.671573 3.82843 0 3 0C2.17157 0 1.5 0.671573 1.5 1.5Z"
                        fill="#6e7781"
                      />
                      <path
                        d="M6 1.5C6 2.32843 6.67157 3 7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5Z"
                        fill="#6e7781"
                      />
                      <path
                        d="M10.5 1.5C10.5 2.32843 11.1716 3 12 3C12.8284 3 13.5 2.32843 13.5 1.5C13.5 0.671573 12.8284 0 12 0C11.1716 0 10.5 0.671573 10.5 1.5Z"
                        fill="#6e7781"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Anulare</DropdownMenuItem>
                  <DropdownMenuItem>Confirmare</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {status === "canceled" && (
            <div className="flex items-center w-full">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea] flex-1">
                Reprogramare
              </Button>
            </div>
          )}
          {status === "completed" && (
            <div className="flex items-center w-full">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea] flex-1">
                Rezumat
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

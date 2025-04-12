"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, FileText, MessageSquare, User, Syringe } from "lucide-react"

export default function DashboardPage() {
  const [userType, setUserType] = useState("patient") // This would come from your auth system

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 border-2 border-blue-100">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                  <AvatarFallback className="bg-[#1373e6] text-white">JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-[#151b26]">Ion Popescu</CardTitle>
                  <CardDescription className="text-[#6e7781]">
                    {userType === "patient" ? "Pacient" : "Doctor"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="space-y-1 mt-2">
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 rounded-md bg-[#e1edfb] text-[#1373e6] font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                  </svg>
                  Panou de Control
                </Link>
                <Link
                  href="/dashboard/appointments"
                  className="flex items-center p-2 rounded-md text-[#6e7781] hover:bg-[#f6fafe] hover:text-[#1373e6]"
                >
                  <CalendarDays className="h-5 w-5 mr-3" />
                  Programări
                </Link>
                <Link
                  href="/dashboard/medical-records"
                  className="flex items-center p-2 rounded-md text-[#6e7781] hover:bg-[#f6fafe] hover:text-[#1373e6]"
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Fișe Medicale
                </Link>
                <Link
                  href="/dashboard/vaccinations"
                  className="flex items-center p-2 rounded-md text-[#6e7781] hover:bg-[#f6fafe] hover:text-[#1373e6]"
                >
                  <Syringe className="h-5 w-5 mr-3" />
                  Vaccinări
                </Link>
                <Link
                  href="/dashboard/chat"
                  className="flex items-center p-2 rounded-md text-[#6e7781] hover:bg-[#f6fafe] hover:text-[#1373e6]"
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  Mesaje
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center p-2 rounded-md text-[#6e7781] hover:bg-[#f6fafe] hover:text-[#1373e6]"
                >
                  <User className="h-5 w-5 mr-3" />
                  Profil
                </Link>
              </nav>
            </CardContent>
          </Card>

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
          </Card>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">{userType === "patient" ? <PatientDashboard /> : <DoctorDashboard />}</div>
      </div>
    </div>
  )
}

function PatientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#151b26]">Panou de Control Pacient</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
            <Clock className="h-4 w-4 mr-2" />
            Istoric
          </Button>
          <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2]">
            <CalendarDays className="h-4 w-4 mr-2" />
            Programare Nouă
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#151b26]">Fișe Medicale Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Rezultate Analize Sânge</p>
                  <p className="text-sm text-[#6e7781]">28 Martie 2025</p>
                </div>
                <Link href="/dashboard/medical-records/123">
                  <Button variant="ghost" size="sm" className="text-[#1373e6]">
                    Vizualizare
                  </Button>
                </Link>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Examinare Fizică Anuală</p>
                  <p className="text-sm text-[#6e7781]">15 Februarie 2025</p>
                </div>
                <Link href="/dashboard/medical-records/456">
                  <Button variant="ghost" size="sm" className="text-[#1373e6]">
                    Vizualizare
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/medical-records">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
                Toate Fișele
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#151b26]">Vaccinări Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Vaccin Antigripal</p>
                  <p className="text-sm text-[#6e7781]">10 Octombrie 2024</p>
                </div>
                <Badge className="bg-[#16bf78] text-white">Complet</Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">COVID-19 Booster</p>
                  <p className="text-sm text-[#6e7781]">5 Ianuarie 2025</p>
                </div>
                <Badge className="bg-[#16bf78] text-white">Complet</Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Hepatita B</p>
                  <p className="text-sm text-[#6e7781]">15 Decembrie 2024</p>
                </div>
                <Badge className="bg-[#ffd100] text-[#151b26]">Doză 2 din 3</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/vaccinations">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
                Toate Vaccinările
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#151b26]">Panou de Control Medic</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
            <Clock className="h-4 w-4 mr-2" />
            Program
          </Button>
          <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2]">
            <FileText className="h-4 w-4 mr-2" />
            Fișă Nouă
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#151b26]">Programări Astăzi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Ion Popescu</p>
                  <p className="text-sm text-[#6e7781]">10:30 - Consultație Regulată</p>
                </div>
                <Badge className="bg-[#1373e6]">Următorul</Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Maria Georgescu</p>
                  <p className="text-sm text-[#6e7781]">11:15 - Control Medical</p>
                </div>
                <Badge variant="outline" className="text-[#6e7781] border-[#e0e4ea]">
                  Programat
                </Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Robert Ionescu</p>
                  <p className="text-sm text-[#6e7781]">14:00 - Pacient Nou</p>
                </div>
                <Badge variant="outline" className="text-[#6e7781] border-[#e0e4ea]">
                  Programat
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/appointments">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
                Vezi Programul
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#151b26]">Mesaje Pacienți</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Elena Vasilescu</p>
                  <p className="text-sm text-[#6e7781]">Întrebare despre medicație</p>
                  <p className="text-xs text-[#6e7781]">acum 10 minute</p>
                </div>
                <Badge className="bg-[#d02746]">Nou</Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">David Marin</p>
                  <p className="text-sm text-[#6e7781]">Simptome de urmărire</p>
                  <p className="text-xs text-[#6e7781]">acum 1 oră</p>
                </div>
                <Badge className="bg-[#d02746]">Nou</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/chat">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
                Toate Mesajele
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#151b26]">Sarcini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Completare Rapoarte Medicale</p>
                  <p className="text-sm text-[#6e7781]">3 rapoarte în așteptare</p>
                </div>
                <Badge variant="secondary" className="bg-[#ffd100] text-[#151b26]">
                  Prioritate Înaltă
                </Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-[#151b26]">Revizuire Rezultate Teste</p>
                  <p className="text-sm text-[#6e7781]">5 revizuiri în așteptare</p>
                </div>
                <Badge variant="secondary" className="bg-[#e0e4ea] text-[#6e7781]">
                  Prioritate Medie
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/tasks">
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
                Toate Sarcinile
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg text-[#151b26]">Fișe Recente Pacienți</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e0e4ea]">
                  <th className="text-left py-2 px-4 font-medium text-[#6e7781]">Pacient</th>
                  <th className="text-left py-2 px-4 font-medium text-[#6e7781]">Data</th>
                  <th className="text-left py-2 px-4 font-medium text-[#6e7781]">Tip</th>
                  <th className="text-left py-2 px-4 font-medium text-[#6e7781]">Diagnostic</th>
                  <th className="text-left py-2 px-4 font-medium text-[#6e7781]">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e0e4ea]">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-[#1373e6] text-white text-xs">IP</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-[#151b26]">Ion Popescu</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[#6e7781]">10 Apr 2025</td>
                  <td className="py-3 px-4 text-[#6e7781]">Consultație Regulată</td>
                  <td className="py-3 px-4 text-[#6e7781]">Hipertensiune</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" className="text-[#1373e6]">
                      Vizualizare
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-[#e0e4ea]">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-[#1373e6] text-white text-xs">MG</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-[#151b26]">Maria Georgescu</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[#6e7781]">8 Apr 2025</td>
                  <td className="py-3 px-4 text-[#6e7781]">Control Medical</td>
                  <td className="py-3 px-4 text-[#6e7781]">Diabet Tip 2</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" className="text-[#1373e6]">
                      Vizualizare
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-[#1373e6] text-white text-xs">EV</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-[#151b26]">Elena Vasilescu</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[#6e7781]">5 Apr 2025</td>
                  <td className="py-3 px-4 text-[#6e7781]">Urgență</td>
                  <td className="py-3 px-4 text-[#6e7781]">Bronșită Acută</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" className="text-[#1373e6]">
                      Vizualizare
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/dashboard/medical-records">
            <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
              Toate Fișele
            </Button>
          </Link>
        </CardFooter>
      </Card>
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
            <>
              <Button variant="outline" size="sm" className="text-[#6e7781] border-[#e0e4ea]">
                Reprogramare
              </Button>
              <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2]">
                Detalii
              </Button>
            </>
          )}
          {status === "pending" && (
            <>
              <Button variant="outline" size="sm" className="text-[#d02746] border-[#e0e4ea]">
                Anulare
              </Button>
              <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2]">
                Confirmare
              </Button>
            </>
          )}
          {status === "canceled" && (
            <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2] w-full">
              Reprogramare
            </Button>
          )}
          {status === "completed" && (
            <Button size="sm" className="bg-[#1373e6] hover:bg-[#0058d2] w-full">
              Rezumat
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
